# 分享渠道统计

首页、更新记录和访问统计页的分享菜单支持中英文，提供信息、邮件、微信、WhatsApp 和复制网址。分享链接保留当前页面、锚点和所选语言，移除原有查询参数（包括 UTM）。二维码在浏览器本地生成。

## Analytics Engine 字段

沿用 `ANALYTICS` binding 和 `policy_radar_visits` dataset。分享事件只写入 Analytics Engine，不写 D1，不增加 PV 或 UV。既有 `blob1` 至 `blob13` 的位置不变。

| 字段 | 内容 |
| --- | --- |
| `blob1` | `share` |
| `blob4` | 当前页面 pathname |
| `blob5` | 页面语言 |
| `blob6`–`blob11` | 既有来源、UTM、会话和落地页归因 |
| `blob12` | 当前页面锚点，存在时记录 |
| `blob14` | `messages`、`email`、`wechat`、`whatsapp`、`copy_link` |
| `blob15` | `select`、`copy_success`、`copy_failure` |
| `double1` | `1` |

- `select`：用户选择一个分享方式。仅打开分享菜单不计入。
- `copy_success`：浏览器确认网址已写入剪贴板。
- `copy_failure`：自动复制失败，界面展示并选中网址供手动复制；不报成功。

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
