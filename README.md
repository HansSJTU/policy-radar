# 留美路径政策雷达 / U.S. Stay Path Policy Radar

一份面向 `F-1 → CPT → OPT → H-1B` 路径的双语政策追踪站。主页按路径影响排序展示政策内容、程序进度、过去与未来时间点、具体影响及原始来源；公开的 `/stats` 页面展示最近 30 天的匿名访问趋势。

A bilingual tracker for U.S. policies affecting the `F-1 → CPT → OPT → H-1B` path. It separates policy impact from procedural certainty and links each entry to its underlying sources.

正式网站以本仓库右侧 **Homepage** 链接为准；访问统计位于同一域名的 `/stats`。

## 功能

- 中文与英文完整切换，桌面端和手机端均可使用；
- 路径轴只按页面列出的 F-1、CPT、OPT、H-1B 归属筛选；
- 每项政策包含客观摘要、流程阶段、日期时间线、影响和来源；
- 缩写与术语提供键盘、鼠标和触屏可用的解释；
- `/stats` 使用 Cloudflare D1 保存匿名的每日浏览量和日去重访客数；
- GitHub `main` 分支通过 GitHub Actions 自动部署到 Cloudflare Workers。

## 数据与来源

政策状态以 Federal Register、DHS、USCIS、ICE/SEVP、OMB/OIRA、Reginfo、法院记录及学校公开通知等原始材料为准。论坛链接只用于补充社区讨论和发现线索，不能替代官方文件。仓库不会复制受版权保护的外部全文。

页面中的影响排序描述政策若按当前方向落地时，对传统留美路径的结构性影响。它不表示政策已经生效，也不代表发生概率。

## 本地开发

需要 Node.js 22.13 或更高版本。

```bash
npm ci
npm run dev
```

运行验证：

```bash
npm test
npm run build
```

## Cloudflare Workers + D1

1. 创建一个名为 `policy-radar-db` 的 D1 数据库。
2. 将其 ID 写入 `wrangler.jsonc` 的 `d1_databases[0].database_id`。
3. 登录 Wrangler，或设置 `CLOUDFLARE_API_TOKEN` 与 `CLOUDFLARE_ACCOUNT_ID`。
4. 应用迁移并部署：

```bash
npm run db:migrate
npm run deploy
```

GitHub Actions 使用同名 repository secrets。Pull Request 只测试和构建；只有 `main` 会迁移生产 D1 并部署。

## 访问统计与隐私

每次主页加载计为一次 page view。同一浏览器在同一美东自然日只计为一个 unique visitor。数据库保存按日期生成的匿名哈希，不保存 IP、姓名或邮箱，也不能用该哈希跨天关联个人。历史迁移只包含公开的每日汇总数字，不包含旧访客哈希。

## 贡献

请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。内容更新需要同时维护中英文、提供可复核来源，并保持摘要客观、明确、有主谓宾。

## 免责声明

本项目用于整理公开信息，不构成法律意见。政策、诉讼和学校做法可能随时变化；任何个人决定都应复核最新原始文件，并在需要时咨询合格的专业人士。

## License

[MIT](LICENSE)
