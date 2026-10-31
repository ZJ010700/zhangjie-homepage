# 张杰 · 个人主页

getartcraft.com 风格的个人主页，基于 [Astro](https://astro.build) 构建，托管于 GitHub Pages。

**线上地址**：`https://<你的GitHub用户名>.github.io/zhangjie-homepage/`

## 快速开始

```bash
npm install     # 首次使用：安装依赖
npm run dev     # 本地开发预览（改文件保存即生效）
npm run build   # 构建生产版本到 dist/
npm run preview # 本地预览构建产物
```

## 日常维护

- **改文字**：全部内容集中在 [`src/data/site.ts`](src/data/site.ts)（逐字段中文注释）
- **加图片**：放进 `public/images/`，再到 `site.ts` 里把对应 `image` 字段改成 `images/文件名`
- **发布上线**：`git add . && git commit -m "更新内容" && git push`，GitHub Actions 自动构建部署
- **详细图文步骤**：见 [`OPERATIONS.md`](OPERATIONS.md) 操作手册

## 技术栈

- Astro 5（静态站生成，零运行时 JS）
- 原生 CSS（design tokens 见 `src/styles/global.css` 顶部）
- 字体：Archivo / Inter / Instrument Serif / Geist Mono（Google Fonts，中文回退系统字栈）
- 部署：GitHub Actions + GitHub Pages

## 目录

```
src/data/site.ts        网站内容（★ 常改）
src/components/         页面区块组件
src/styles/global.css   配色/字体变量（★ 换主题色）
public/images/          图片资源（★ 常放）
astro.config.mjs        站点地址 / base 配置
.github/workflows/      自动部署工作流
```
