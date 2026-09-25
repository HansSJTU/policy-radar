# 留美路径政策雷达

[English](README.md) · [简体中文](README.zh-CN.md)

[![CI](https://github.com/HansSJTU/policy-radar/actions/workflows/ci.yml/badge.svg)](https://github.com/HansSJTU/policy-radar/actions/workflows/ci.yml)
[![Deploy](https://github.com/HansSJTU/policy-radar/actions/workflows/deploy.yml/badge.svg)](https://github.com/HansSJTU/policy-radar/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-1683B6.svg)](LICENSE)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Live site](https://img.shields.io/badge/site-live-2EA44F)](https://stayradar.org/)

一份面向 `F-1 → CPT → OPT → H-1B` 路径的政策追踪站。主页按路径影响排序展示政策内容、程序进度、过去与未来时间点、具体影响及原始来源。

正式网站：[stayradar.org](https://stayradar.org/)。

## 功能

- 路径轴只按页面列出的 F-1、CPT、OPT、H-1B 归属筛选；
- 每项政策包含客观摘要、流程阶段、日期时间线、影响和来源；
- 缩写与术语提供键盘、鼠标和触屏可用的解释；
- `/stats` 使用 Cloudflare D1 保存匿名的每日浏览量、日去重访客数和国家汇总；
- GitHub `main` 分支通过 GitHub Actions 自动部署到 Cloudflare Workers。

## 数据与来源

政策状态以 Federal Register、DHS、USCIS、ICE/SEVP、OMB/OIRA、Reginfo、法院记录及学校公开通知等原始材料为准。论坛链接只用于补充社区讨论和发现线索，不能替代官方文件。仓库不会复制受版权保护的外部全文。

页面中的影响排序描述政策若按当前方向落地时，对传统留美路径的结构性影响。它不表示政策已经生效，也不代表发生概率。

## 项目结构

| 路径 | 内容 |
| --- | --- |
| `content/policies/<id>.ts` | 一项政策的全部内容，中英文并列：状态、摘要、时间线、分析、示例、流程位置、来源和核对日期。 |
| `app/policy-ids.ts` | 政策列表，顺序就是网站上的影响排名。 |
| `app/policy-data.ts` | 按语言返回一项政策，以及它的流程进度。 |
| `app/process-model.ts` | 联邦规则制定、SEVP 指引和行政命令三类流程的共用文案与阶段判断。 |
| `app/briefing-feed.ts` | 滚动 30 天动态，最新条目在最上面。 |
| `app/cpt-schools.ts` | CPT 学校记录，每条记录同时包含两种语言。 |
| `app/home-view.ts` | 在服务器上组装首页，浏览器只下载当前语言和卡片用到的字段。 |
| `app/policies/[policyId]/` | 政策详情页。 |
| `tests/` | Node 测试，包括检查两种语言内容是否一致。 |

更新某项政策时，修改 `content/policies/` 里对应的文件。只有在真正复核来源后才修改 `checkedOn`；网站内容更新时，同步修改 `app/policy-freshness.ts` 里的 `SITE_UPDATED_ON`。

## 本地开发

需要 Node.js 22.13 或更高版本。

```bash
npm ci
npm run dev
```

运行验证：

```bash
npm test
npm run lint
npm run build
```

## Cloudflare Workers + D1

1. 创建一个名为 `policy-radar-db` 的 D1 数据库。
2. 将其 ID 写入 `wrangler.jsonc` 的 `d1_databases[0].database_id`。
3. 登录 Wrangler，或设置 `CLOUDFLARE_API_TOKEN` 与 `CLOUDFLARE_ACCOUNT_ID`。
4. 部署：

```bash
npm run deploy
```

GitHub Actions 使用同名 repository secrets。Pull Request 与非 `main` 分支只测试和构建；`main` 分支会完成验证并部署 Worker。

## 访问统计与隐私

每次主页加载计为一次 page view。同一浏览器在同一美东自然日只计为一个 unique visitor。数据库保存每日哈希和国家代码，并通过浏览器随机 UUID 的稳定哈希统计跨天回访，记录首次／最近访问、去重访问日、会话与首次来源，不保存 IP、姓名或邮箱。详见[留存统计](RETENTION.md)。历史公开汇总数字不包含访客哈希或国家信息。

## 贡献

请先阅读 [中文版贡献指南](CONTRIBUTING.zh-CN.md)。内容更新需要同时维护支持的两种语言、提供可复核来源，并保持摘要客观、明确、有主谓宾。

## 免责声明

本项目用于整理公开信息，不构成法律意见。政策、诉讼和学校做法可能随时变化；任何个人决定都应复核最新原始文件，并在需要时咨询合格的专业人士。

## License

[MIT](LICENSE)

分享按钮的渠道埋点、统计口径与 Analytics Engine 查询示例见[分享统计说明](docs/share-analytics.md)。
