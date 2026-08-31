# Policy Radar 开源与 Cloudflare 单站部署设计

日期：2026-08-31  
状态：已由用户确认设计方向，等待书面规格审核

## 1. 目标

将现有“留美路径政策雷达”整理为公开开源项目，并将唯一的正式公开站点迁移到用户自己的 Cloudflare Workers 与 D1。GitHub 保存公开源码，Cloudflare 提供运行时、数据库和正式网址；主页与 `/stats` 必须位于同一个域名。

最终公开仓库固定为：

`https://github.com/HansSJTU/policy-radar`

项目使用 MIT License。站点中需要提供清晰可访问的 GitHub 项目链接，并同时适配中英文、桌面端和手机端。

## 2. 范围

### 2.1 包含

- 创建全新的公开 GitHub 仓库 `HansSJTU/policy-radar`。
- 使用干净的初始提交发布经过审计的源码，不将当前私有开发历史直接推送到公开仓库。
- 添加 MIT License、双语 README、贡献说明、环境变量示例、部署说明和免责声明。
- 将现有 Sites 专用构建配置迁移为可公开复用的 Cloudflare Workers + D1 配置。
- 使用 GitHub Actions 在 `main` 分支更新后自动测试、构建、迁移数据库并部署。
- 将主页、`/stats`、访问记录 API 和 D1 放在同一个 Cloudflare Worker 域名下。
- 迁移现有每日页面浏览量和每日独立访客数。
- 在站点顶部与页脚加入 GitHub 项目链接。
- 新站验证完成后，将旧 Sites 站点改为仅所有者可见，使公网只保留一个正式站点。

### 2.2 不包含

- GitHub Pages 静态镜像。
- 自定义域名购买或 DNS 迁移。
- 用户登录、账户系统或管理后台。
- 保存 IP、邮箱、姓名或跨日可关联的访客身份。
- 在公开仓库中保存 Cloudflare API Token、GitHub 凭据或其他秘密。

## 3. 发布与仓库结构

### 3.1 公开仓库策略

公开仓库从经过清理的当前源码生成一份新的、单提交起点。这样可以避免在公开 Git 历史中携带 Sites 项目元数据、旧部署结构和无关的开发过程。

初始公开版本至少包含：

- 应用源码、测试、数据库 schema 与 migrations；
- `README.md`：中文为主、英文摘要，包含功能、截图或正式站点链接、开发命令、部署方法、数据来源和免责声明；
- `LICENSE`：MIT，版权主体为 `HansSJTU`；
- `CONTRIBUTING.md`：本地开发、测试、内容更新与 Pull Request 约定；
- `.env.example`：只列变量名和说明，不含真实值；
- `.github/workflows/ci.yml`：Pull Request 与普通分支的测试和构建；
- `.github/workflows/deploy.yml`：仅 `main` 自动部署；
- Cloudflare/Wrangler 配置与 D1 migrations。

当前 `.openai/hosting.json`、Sites 项目 ID 和 Sites 专用 Vite 插件不会进入公开仓库。现有 `.env*`、构建产物、Wrangler 本地状态和凭据文件继续由 `.gitignore` 排除。

### 3.2 GitHub 仓库设置

- 可见性：Public。
- 默认分支：`main`。
- 仓库描述：中英文简短说明留美路径政策雷达及覆盖范围。
- Homepage：最终 Cloudflare 正式网址。
- Topics：`f1`、`cpt`、`opt`、`h1b`、`immigration`、`policy-tracker`、`cloudflare-workers`。
- Issues：开启。
- Actions：开启，部署工作流只允许 `main` 使用 production environment。

## 4. 运行架构

```text
GitHub public repository
        │ push to main
        ▼
GitHub Actions
  ├─ npm ci
  ├─ npm test
  ├─ production build
  ├─ apply D1 migrations
  └─ deploy with Wrangler
        │
        ▼
Cloudflare Worker: policy-radar
  ├─ /
  ├─ /stats
  ├─ /api/visit
  └─ D1 binding: DB
```

Cloudflare 是唯一正式运行环境。GitHub 负责源码、审查和自动部署，不承载静态 Pages 版本。

## 5. Cloudflare 配置

### 5.1 Worker 与 D1

- Worker 名称：`policy-radar`。
- D1 数据库名称：`policy-radar-db`。
- 应用绑定名保持 `DB`，避免改动现有数据库访问层接口。
- 正式网址使用 Cloudflare 分配的 `workers.dev` 地址。
- 现有安全校验继续保留：同源访问、请求体大小限制、UUID 校验和失败时返回 `503`。

### 5.2 GitHub Actions 凭据

部署工作流使用 GitHub repository secrets：

- `CLOUDFLARE_API_TOKEN`：仅授予目标账户的 Workers、D1 和部署所需最小权限；
- `CLOUDFLARE_ACCOUNT_ID`：Cloudflare 账户 ID。

D1 database ID 可保存在 Wrangler 配置或 GitHub repository variable 中；它不是认证凭据。任何 API Token 都只能保存到 GitHub Secrets，不写入代码、日志、远程 URL 或 Git 配置。

创建 API Token 与写入 GitHub Secret 属于敏感凭据操作，实际执行前需要用户在操作时确认。必要时由用户在浏览器中完成登录或密钥创建步骤。

### 5.3 自动部署规则

- Pull Request：只运行安装、测试和构建，不访问生产凭据，不部署。
- `main`：测试与构建全部成功后，按顺序应用远端 D1 migration 并部署 Worker。
- migration 必须可重复执行；部署失败不得影响旧站点。
- GitHub Actions 使用固定 major 版本的官方 Cloudflare Wrangler Action 或项目锁定版本的 Wrangler CLI。

## 6. 访问统计与历史数据迁移

### 6.1 新数据模型

继续使用按美东日期统计的设计：

- `daily_traffic` 保存每日页面浏览量；
- `daily_visitors` 保存当天访客 ID 的日期作用域哈希，用于当日去重；
- 新增一个历史独立访客基线字段或等价汇总表，用于保存迁移前每日独立访客数量。

查询结果按以下方式计算：

`每日独立访客 = 迁移的历史基线 + 新数据库中当天哈希数量`

迁移完成后，新访问仍通过日期作用域哈希去重。哈希不会跨天关联，也不会存储 IP、姓名或邮箱。

### 6.2 迁移原则

- 只迁移公开 `/stats` 已展示的每日汇总数据：日期、page views、unique visitors。
- 不复制旧 `daily_visitors` 的访客哈希。
- 迁移脚本使用日期主键和 upsert，重复运行不会重复累加。
- 迁移后逐日比对旧站和新 D1 的 30 天序列、总浏览量、独立访客总数和活跃日期数。

### 6.3 数据取得

优先通过 Sites 的只读数据库查看能力读取每日汇总。若该能力无法访问现有项目，则在旧站短期增加一个只返回公开日汇总的只读导出端点，读取一次后从公开仓库初始版本中移除。该端点不得返回访客哈希或其他标识。

## 7. 界面改动

### 7.1 顶部导航

在现有顶部操作区加入 GitHub 链接：

- 桌面端显示 GitHub 图标与 `GitHub` 文本；
- 手机端只显示 GitHub 图标，保留可读的 `aria-label`；
- 链接在新标签页打开，并使用安全的 `rel="noreferrer"`；
- 中英文共用品牌名 `GitHub`，辅助标签本地化。

目标地址固定为：

`https://github.com/HansSJTU/policy-radar`

### 7.2 页脚

页脚加入：

- `Open source on GitHub / GitHub 开源项目`；
- MIT License 标识；
- 保留原有更新时间、来源复核和非法律意见声明。

移动端不得产生横向溢出，顶部 GitHub 图标不能挤压语言切换或品牌名称。

## 8. 开源文档与免责声明

README 需要明确：

- 站点追踪的是公开政策文本、官方流程、诉讼和学校公开信息；
- 严重度是对传统 `F-1 → CPT → OPT → H-1B` 路径影响的结构化排序；
- 内容不是法律意见；个人决定需要核查原始文件并咨询合格专业人士；
- 社区论坛链接只作为讨论和线索来源，不能替代官方文件；
- 访问统计只保存每日匿名汇总与日期作用域哈希。

MIT License 适用于仓库中的原创代码和原创文本。外部来源保持原链接与各自版权，不复制受版权保护的全文。

## 9. 切换与回滚

1. 保持现有 Sites 站点公开运行。
2. 创建公开 GitHub 仓库和 Cloudflare 资源。
3. 部署新站并迁移历史统计。
4. 对新网址进行完整验证。
5. 更新 GitHub Homepage 与站内 GitHub 链接。
6. 用户确认新网址可用后，把旧 Sites 站点改为仅所有者可见；不立即删除，以保留短期回滚能力。

若新部署或数据迁移失败，旧站保持公开，流量不切换。只有新站主页、`/stats`、记录 API、移动端和中英文功能全部验证后，才执行旧站退役。改变旧站访问权限前再次向用户确认。

## 10. 测试与验收

### 10.1 自动测试

- 保留现有测试套件。
- 新增 GitHub 链接的 URL、可访问名称和中英文测试。
- 新增历史独立访客基线与新访客去重合并测试。
- 新增迁移幂等测试。
- 新增部署配置与 D1 binding 校验。
- CI 必须执行 `npm test`、定向 lint 和生产构建。

### 10.2 部署验收

- `/` 返回成功并完整渲染政策雷达。
- `/stats` 返回成功，迁移前后的每日数据和总数一致。
- `/api/visit` 接受合法 UUID、拒绝非法和跨站请求。
- 一次有效访问只增加一次页面浏览量，同一浏览器同一天只增加一次独立访客。
- 中英文切换、政策筛选、政策锚点、术语解释和访问统计导航正常。
- 桌面端与手机端无横向溢出；GitHub 链接可点击并指向正确仓库。
- GitHub Actions 在 Pull Request 不部署，在 `main` 成功部署。
- 公开仓库扫描不到 API Token、私钥、密码、`.env` 内容或 Sites 项目凭据。

## 11. 完成标准

以下条件全部满足后，本次迁移完成：

- `HansSJTU/policy-radar` 是公开仓库并带 MIT License；
- README 与贡献说明足以让第三方本地运行和部署；
- GitHub `main` 可自动部署到 Cloudflare；
- 唯一公开正式网址同时提供主页和 `/stats`；
- 历史统计连续，新访问可继续累计；
- 网站顶部和页脚均链接到 GitHub 项目；
- 新站完整验证通过；
- 经用户最终确认，旧 Sites 站点已改为仅所有者可见。
