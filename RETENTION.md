# 匿名留存统计

浏览器已使用 localStorage 中的随机 UUID（`f1-policy-radar-anonymous-visitor`）。服务端现在将其规范为小写，并用带 `policy-radar:retention:v1:` 前缀的 SHA-256 生成 `anonymous_visitor_id`。不使用 IP 或设备指纹。该标识可关联同一浏览器，不代表已验证的自然人；清除存储、隐私模式、禁用存储或更换设备会影响识别。

## 数据与字段

- Analytics Engine `blob20` = `anonymous_visitor_id`，所有事件均附带。既有 `index1` 仍为 `daily_visitor_hash`，`blob1`–`blob19` 顺序不变；旧事件的 `blob20` 为空。
- D1 `retention_visitors` 保存 first_seen / last_seen（UTC）、first_day（美东日期）、首次 UTM source / medium / campaign 和 referrer_host。首次来源不会被后续 direct 或其他渠道覆盖。
- D1 `retention_days` 按匿名 ID + 美东日期去重。
- D1 `retention_sessions` 按匿名 ID + session_id 去重，排除未知 session；沿用现有 sessionStorage 会话口径（标签页会话，不是 30 分钟无操作会话）。
- `db/retention.ts` 的 `selectRetentionVisitors` 可查询 first_seen、last_seen、visit_days、session_count。个人级标识没有公开 API。

只有 page_view 更新 D1 留存；点击／分享不能增加访客数或访问日。留存写入和 PV/UV 写入在同一个 D1 batch 中完成。部署后的首次 page_view 会自动创建所需表和索引，无需回填。

## 查询报表

在仓库根目录执行（需要既有 Cloudflare 登录权限）：

```sh
node --experimental-strip-types scripts/retention-report.mjs --remote
```

本地 D1 使用 `--local`。输出两组 JSON 结果：首次美东访问日 + 首次来源 cohort 的 D1/D3/D7/D30，以及每日 returning visitor 百分比。无采集数据、表尚未创建时，应先产生一次 page_view。

- Dn = cohort 中在首次访问后**恰好第 n 个美东自然日**出现 page_view 的浏览器数 / cohort 总数；不是第 n 天或以后任意回访。
- 只有目标日已完整结束才返回 retained_visitors / retention_percent；未成熟为 NULL，已成熟但无人回访为 0。
- returning_percent = 当日访客中 first_day 早于当日的比例；同日第二次访问不算跨日回访。报表排除今天。
- 社区 cohort 应使用明确 UTM，例如 `utm_source=community&utm_medium=social&utm_campaign=launch`。查询保留首次来源全部维度；合并渠道行时须相加人数后重算比例，不能平均百分比。
- first_seen 是本功能首次观测时间，不等于上线前的真实首次访问。旧 daily hash 无法回填；首批 cohort 会包含原有用户。

Analytics Engine 可用于按 `blob20` 检查跨天事件；精确留存报表使用 D1。Analytics Engine 最多接受 20 个 blobs，事件保存三个月且可能采样，不能将采样后的去重人数直接当成精确 cohort 分母。参见 [字段和保存限制](https://developers.cloudflare.com/analytics/analytics-engine/limits/) 与 [SQL API 采样说明](https://developers.cloudflare.com/analytics/analytics-engine/sql-api/)。D1 留存表目前没有自动过期策略，按访问日／会话增长；需要在后续数据保存策略中明确清理周期。
