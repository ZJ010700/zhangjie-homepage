# 📖 个人主页操作手册

> 本手册写给**网站的主人**（张杰）。假设你只学过一点编程，每一步都给出了可以直接照做的操作。
>
> 项目位置：`E:\STUDY\ai-workspace\personal-homepage`
> 线上地址：`https://<你的GitHub用户名>.github.io/zhangjie-homepage/`

---

## 目录

1. [快速上手：改一行字并看到效果](#1-快速上手)
2. [项目结构：每个文件夹是干什么的](#2-项目结构)
3. [本地预览的三种方式](#3-本地预览)
4. [修改文字内容（最重要）](#4-修改文字内容)
5. [添加图片（头像 / 项目配图）](#5-添加图片)
6. [添加 / 删除 / 调整项目卡片](#6-添加或删除项目卡片)
7. [修改配色与字体](#7-修改配色与字体)
8. [发布更新到 GitHub（上线流程）](#8-发布更新到-github)
9. [常见问题排查](#9-常见问题排查)
10. [进阶玩法](#10-进阶玩法)

---

## 1. 快速上手

只需要三步，就能体会"改内容"的完整流程：

1. 按 `Win + R`，输入 `cmd` 回车，在黑窗口里粘贴这两行（每行回车一次）：

   ```
   cd /d E:\STUDY\ai-workspace\personal-homepage
   npm run dev
   ```

2. 看到终端出现 `http://localhost:4321/zhangjie-homepage/` 后，按住 `Ctrl` 单击它（或复制到浏览器打开）——这就是你的网站。

3. 用记事本或 VSCode 打开 `src\data\site.ts`，随便改一句话（比如把邮箱改成你自己的），**保存**，然后刷新浏览器——文字已经变了。

> 就这么简单：**改 site.ts → 保存 → 刷新浏览器**。这就是日常维护网站 90% 的操作。
> 看完想退出：在终端按 `Ctrl + C` 停止预览服务。

---

## 2. 项目结构

```
personal-homepage\
├── src\
│   ├── data\
│   │   └── site.ts          ★ 网站所有文字内容都在这里（你最常改的文件）
│   ├── components\           页面的各个"区块"组件（一般不用动）
│   ├── layouts\              页面骨架（一般不用动）
│   ├── pages\
│   │   └── index.astro       主页入口（一般不用动）
│   └── styles\
│       └── global.css        全站配色/字体变量（想换主题色才动它）
├── public\
│   └── images\               ★ 你以后添加的图片都放这个文件夹
├── astro.config.mjs          GitHub 部署地址配置（换仓库名才动它）
├── .github\workflows\        自动部署脚本（不用动）
├── OPERATIONS.md             本手册
└── README.md                 项目简介
```

**记忆口诀**：改字找 `site.ts`，放图进 `images`，换色去 `global.css`。

---

## 3. 本地预览

| 方式 | 命令 | 说明 |
|---|---|---|
| 开发预览（推荐） | `npm run dev` | 改完保存，刷新即见效。地址：`http://localhost:4321/zhangjie-homepage/` |
| 构建产物预览 | `npm run build` 然后 `npm run preview` | 模拟线上效果，发布前可以用它最后检查一遍 |
| 直接双击 | 双击 `dist\index.html` | 不推荐：子路径资源可能显示异常 |

> 终端显示乱码或 `npm` 不是内部命令？→ 见 [常见问题](#9-常见问题排查)。

---

## 4. 修改文字内容

打开 `src\data\site.ts`，所有内容按分区排列、每项都有中文注释。常用字段速查：

| 想改什么 | 位置（site.ts 内） |
|---|---|
| 浏览器标签页标题 | `SITE.title` |
| 网站的搜索引擎描述 | `SITE.description` |
| **联系邮箱**（上线前必改！） | `SITE.email` |
| **GitHub 链接**（上线前必改！） | `SITE.github` |
| 首屏大标语 | `HERO.headline` |
| 首屏一句话介绍 | `HERO.sub` |
| 首屏三个数据块 | `HERO.stats` |
| 关于我的两段自述 | `ABOUT.paragraphs` |
| 关于我的信息卡 | `ABOUT.facts` |
| 项目卡片（见下一节） | `PROJECTS.items` |
| 滚动条上的技术关键词 | `SKILLS.marquee` |
| 四组技能卡 | `SKILLS.groups` |
| 时间线经历 | `TIMELINE.items` |
| 荣誉列表 | `TIMELINE.honors` |
| 联系区标语 | `CONTACT.headline` |

两个语法点：

- **首屏标语变色字**：`HERO.headline` 里用一对 `*` 号包住的文字会显示为主题蓝色，例如 `用代码，解决*真实的问题*。`
- **引号**：文件是 TypeScript 源码，文字内容必须放在引号 `" "` 里面，别把引号删了；文字本身想包含英文双引号时，用中文引号「」或 \\" 转义。

改完保存 → 刷新浏览器即可看到效果，确认满意后按第 8 节发布上线。

---

## 5. 添加图片

### 5.1 添加 / 更换头像

1. 把图片放进 `public\images\` 文件夹，命名为 `avatar.svg`（或 png/jpg/webp 均可，位图建议宽高 800×1000 左右、比例 4:5、大小 < 500KB）
2. 打开 `src\data\site.ts`，确认这一行指向你的文件名：
   ```ts
   avatar: "images/avatar.svg",
   ```
3. 保存刷新。想恢复"首字母占位块"，把这行改成 `avatar: "",` 即可。

> 当前头像是一张程序生成的矢量插画 `avatar.svg`（坐在电脑前思考的人物插画，仅几 KB）。想换回真实照片：把照片命名为 `avatar.png` 放进 `public\images\`，再把上面那行改成 `avatar: "images/avatar.png",`。

### 5.2 给项目卡片加配图

1. 把图片放进 `public\images\`，建议按项目命名，如 `freqspy.jpg`、`tourism.jpg`
2. 在 `site.ts` 的 `PROJECTS.items` 里找到对应项目，把
   ```ts
   image: "",
   ```
   改成
   ```ts
   image: "images/freqspy.jpg",
   ```
3. 保存刷新——占位块就变成真图了。

**图片规格建议**：横图 1600×900 左右（页面里按 16:9 裁切显示）、jpg/png/webp 格式、单张 < 1MB。手机拍的图太大时，可以用微信"发送给文件传输助手时勾选压缩"或 [squoosh.cn](https://squoosh.cn) 在线压一压。

> 图片路径为什么开头没有 `public`？——`public` 文件夹里的东西会原样搬到网站根目录，所以路径直接从 `images/...` 开始写。

---

## 6. 添加或删除项目卡片

项目卡片在 `site.ts` 的 `PROJECTS.items` 数组里，一个 `{ ... }` 块就是一张卡。

**新增项目**：复制一个现成的 `{ ... }` 块（从 `{` 到 `},` 整段），粘贴到列表里，然后改字段：

```ts
{
  name: "新项目名字",
  sub: "一句话副标题",
  desc: "项目介绍，两三句话。",
  tech: ["技术1", "技术2"],
  image: "",       // 有图就填 "images/xxx.jpg"
  link: "",        // 有仓库/演示就填网址
  award: "",       // 有获奖就写，没有留空
  color: "#2f7bf5" // 占位块颜色
},
```

**删除项目**：整段删掉对应的 `{ ... },` 即可（注意别多删一个逗号）。

**调整顺序**：整段剪切粘贴到你想要的位置。列表第一个显示在页面最上方。

改完保存，如果终端报红色错误，多半是少了引号或逗号——对照报错提示的行号检查。

---

## 7. 修改配色与字体

打开 `src\styles\global.css`，最顶部的 `:root` 就是全站变量：

```css
--accent: #2d81ff;    /* 主题强调色（按钮悬浮、标语变色字、星星…） */
--bg: #f2f1ee;        /* 页面底色 */
--ink: #101014;       /* 正文颜色 */
```

- 想换主题色：把 `--accent` 改成任意颜色值（在线搜"颜色代码"选一个），浅色/深色两处都改
- 网站会自动跟随系统深浅色模式，深色变量在下面 `@media (prefers-color-scheme: dark)` 那段
- 改字体：默认用 Archivo + Inter + 中文系统字栈（微软雅黑等），不用动

---

## 8. 发布更新到 GitHub

网站由 GitHub Actions 自动构建部署：**你只管 push，剩下全自动**。

### 日常更新（网站已上线后）

在项目文件夹打开终端（资源管理器地址栏输入 `cmd` 回车），依次执行：

```
git add .
git commit -m "更新内容"
git push
```

push 后等 1–2 分钟，GitHub 会自动把新版本发布到线上地址。进度可在仓库页面的 **Actions** 标签页查看：黄点 = 构建中，绿勾 = 已上线，红叉 = 失败（点进去看日志，或对照第 9 节排查）。

### 首次部署（仓库还没建时）

首次部署需要登录 GitHub CLI。打开终端输入：

```
gh auth login
```

按提示选择：`GitHub.com` → `HTTPS` → `Login with a web browser` → 复制终端显示的一次性代码 → 浏览器里粘贴授权。

登录成功后告诉我（或自己执行）：

```
gh repo create zhangjie-homepage --public --source=. --push
gh api -X POST repos/{owner}/{repo}/pages -f build_type=workflow
```

等首轮 Actions 跑完（约 2 分钟），网站就永久上线了：`https://你的用户名.github.io/zhangjie-homepage/`

> **上线前检查清单**：
> - [ ] `site.ts` 里的 `email` 已改成真实邮箱
> - [ ] `site.ts` 里的 `github` 已改成你的主页链接
> - [ ] 页面上没有手机号、学号等隐私信息（默认已全部排除，若自己新增内容请留意）

---

## 9. 常见问题排查

| 现象 | 原因与解决 |
|---|---|
| `npm` 不是内部或外部命令 | Node.js 没装好。去 [nodejs.org](https://nodejs.org) 装 LTS 版，装完**重开终端**再试 |
| `npm run dev` 报红字 | 先看第一条报错（通常在最后往上翻）；常见是 `site.ts` 少了引号/逗号，按报错行号修复 |
| 改了字但浏览器没变 | 忘记保存文件（Ctrl+S）；或浏览器缓存——按 `Ctrl + F5` 强制刷新 |
| 图片不显示（404） | 检查三处：文件确实在 `public\images\` 里？文件名大小写一致？`site.ts` 路径写的是 `images/文件名`（没有 `public/` 前缀） |
| 线上样式错乱、图片裂开 | 多半是 `astro.config.mjs` 的 `base` 和仓库名不一致。`base` 必须是 `/仓库名`（如 `/zhangjie-homepage`），改完 push 重新部署 |
| GitHub Actions 构建失败（红叉） | 点开失败的 run 看日志；最常见原因是 `site.ts` 语法错误——本地先跑 `npm run build` 确认无报错再 push |
| 网站打开 404 | 首次部署后 Pages 生效要等几分钟；或确认仓库 Settings → Pages 的 Source 是 **GitHub Actions** |
| push 提示要登录/没权限 | 重新执行 `gh auth login`；或运行 `gh auth setup-git` 修复 git 凭据 |
| 终端中文乱码 | 输入 `chcp 65001` 切换到 UTF-8 |

---

## 10. 进阶玩法

- **自定义域名**：买好域名后，在 `public\` 下新建文件 `CNAME`（无后缀），内容只写你的域名（如 `zhangjie.cn`）；再在域名服务商加一条 CNAME 记录指向 `<用户名>.github.io`；最后把 `astro.config.mjs` 的 `site` 改成 `https://你的域名` 并删掉 `base` 配置。
- **让搜索引擎收录**：网站自带 title/description/OG 标签，上线后可在 Google Search Console、百度站长平台提交 `https://你的地址/`。
- **统计访问量**：注册 [umami](https://umami.is) 或不蒜子，把脚本加进 `src\layouts\Layout.astro` 的 `<head>`。
- **加博客页面**：以后想写文章时可以加 Markdown 博客（Astro 原生支持），到时候让 AI 帮你加，结构已经预留好了。

---

*手册完 · 有拿不准的操作，把报错截图丢给 AI 就行*
