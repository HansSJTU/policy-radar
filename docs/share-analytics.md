# 分享渠道统计

首页、更新记录和访问统计页的分享菜单支持中英文，提供信息、邮件、微信、WhatsApp 和复制网址。分享链接保留当前页面、锚点和所选语言，移除原有查询参数（包括 UTM）。二维码在浏览器本地生成。

政策卡、政策详情和学校卡复用同一个菜单，另提供「复制本条摘要与链接」及「生成本条分享图」。摘要和 PNG 共用条目模型，包含标题、状态、适用范围、最后核对日期、品牌和原文入口，并保留生效限定与证据边界。PNG 在浏览器本地绘制，不依赖截图服务或远程字体；长文自动增加高度，不截断限定条件。失败时可重试；复制失败会选中完整摘要供手动复制。

政策日期沿用 `POLICY_AS_OF`；学校使用各自记录的 `checkedOn`，初始值依据 `docs/audits/2026-09-07.md`。生成图片不会刷新核对日期。社区学校日期代表截图核对日期，图文始终标注「待核实」与当前政策缺少公开确认。

单条链接直达政策详情或 `#school-{id}`；学校 ID 固定，打开社区学校链接会自动切到对应分组并定位卡片。单条分享使用 `utm_source=share&utm_medium=earned&utm_campaign={kind}-{id}`，不继承发送者的小红书或其他推广来源；统计事件本身仍保留发送者会话归因。

## Analytics Engine 字段

沿用 `ANALYTICS` binding 和 `policy_radar_visits` dataset。分享事件只写入 Analytics Engine，不写 D1，不增加 PV 或 UV。既有 `blob1` 至 `blob13` 的位置不变。

| 字段 | 内容 |
| --- | --- |
| `blob1` | `share` |
| `blob4` | 当前页面 pathname |
| `blob5` | 页面语言 |
| `blob6`–`blob11` | 既有来源、UTM、会话和落地页归因 |
| `blob12` | 单条政策 ID；学校分享留空；普通页面沿用详情／锚点识别 |
| `blob14` | `messages`、`email`、`wechat`、`whatsapp`、`copy_link`、`copy_summary`、`share_image` |
| `blob15` | `select`、`copy_success`、`copy_failure`、`generate_success`、`generate_failure`、`download` |
| `blob16` | 单条学校 ID，其他分享留空（新增，不移动原字段） |
| `double1` | `1` |

- `select`：用户选择一个分享方式。仅打开分享菜单不计入。
- `copy_success`：浏览器确认网址已写入剪贴板。
- `copy_failure`：自动复制失败，界面展示并选中网址供手动复制；不报成功。
- `copy_summary` 的 `copy_success`／`copy_failure`：完整摘要与链接的剪贴板结果。
- `share_image` 的 `generate_success`／`generate_failure`：PNG 是否已生成并可预览。
- `share_image` 的 `download`：点击保存图片，仅代表发起下载，不能确认用户保存或转发。长按保存无法观测。

微信面板里的复制归因到 `wechat`，不会额外产生第二个 `select`。普通复制按钮归因到 `copy_link`。WhatsApp 等分享链接不会重复记录为 `outbound_click`。

分享入口点击不等于实际发送成功。网站无法确认用户是否发送信息或邮件、是否扫码转发，因此没有 `sent` 事件。事件不记录收件人、电话号码、邮箱地址或剪贴板内容。统计异常不阻止分享。

## 查询过去 30 天的分享方式

在该 Cloudflare 账户的 Analytics Engine SQL API 中执行：

```sql
SELECT
  blob14 AS share_method,
  blob15 AS action,
  SUM(_sample_interval) AS events
FROM policy_radar_visits
WHERE blob1 = 'share'
  AND timestamp > NOW() - INTERVAL '30' DAY
GROUP BY share_method, action
ORDER BY events DESC
```

只统计渠道选择次数时，在 WHERE 中增加 `AND blob15 = 'select'`。不要把所有动作相加当成分享总数：一次选择后复制成功会产生两个不同的事件。

`SUM(_sample_interval)` 用于处理采样权重，参见 [Cloudflare SQL API 文档](https://developers.cloudflare.com/analytics/analytics-engine/sql-api/)。

本地预览用于验证按钮、事件请求和接口校验。部署到绑定了 `ANALYTICS` 的 Worker 后才会写入远端 dataset；无需新增 binding 或迁移数据库。


## 内容维度与政策 ID 规范

`blob12` 只接受 `POLICY_IDS` 中的规范 ID：`policy-opt-fee` 归一为 `opt-fee`，
`top`、`ranking`、`cpt-schools`、学校锚点及未知 ID 均留空。学校 ID 继续使用 `blob16`。
所有事件固定保留 `blob1`–`blob16` 的位置，并追加：

| 字段 | 维度 | 值 |
| --- | --- | --- |
| `blob17` | `content_type` | 根据有效 ID 推导为 `policy`、`school` 或 `page` |
| `blob18` | `component` | `page`、`ranking_card`、`policy_detail`、`navigation`、`share_menu`（预留 `school_card`） |
| `blob19` | `action` | PV 为 `view`，链接点击为 `click`，分享沿用经过校验的 `share_action` |

`content_click` 记录榜单卡片内的站内链接点击；站外链接仍为 `outbound_click`。
两者只写 Analytics Engine，不增加 D1 PV/UV。分享组件统一为 `share_menu`。

部署后的数据可用以下查询查看全部业务维度；如需逐会话/访客排查，
再把 `blob10 AS session_id`、`index1 AS daily_visitor_hash` 加入 SELECT 和 GROUP BY。

```sql
SELECT
  blob2 AS day, blob1 AS event_type, blob3 AS country,
  blob4 AS pathname, blob5 AS language, blob6 AS referrer_host,
  blob7 AS utm_source, blob8 AS utm_medium, blob9 AS utm_campaign,
  blob11 AS landing_page, blob12 AS policy_id,
  blob13 AS outbound_destination, blob14 AS share_method,
  blob15 AS share_action, blob16 AS school_id,
  blob17 AS content_type, blob18 AS component, blob19 AS action,
  SUM(_sample_interval * double1) AS events
FROM policy_radar_visits
WHERE timestamp >= NOW() - INTERVAL '30' DAY
  AND blob17 != ''
GROUP BY day, event_type, country, pathname, language, referrer_host,
  utm_source, utm_medium, utm_campaign, landing_page, policy_id,
  outbound_destination, share_method, share_action, school_id,
  content_type, component, action
ORDER BY day DESC, events DESC
LIMIT 10000
```

历史事件不会被这次代码更新改写，且没有新组件维度。上面的 `blob17 != ''`
明确只查询新 schema 数据。历史 dashboard 应在查询/展示层先去掉政策 ID 的
`policy-` 前缀，再用 `POLICY_IDS` 校验；无效 ID 置空，旧组件标为 `unknown`，
不要根据政策 ID 猜测它来自榜单卡片。跨新旧数据查询时移除该过滤条件并应用这些归一规则。
