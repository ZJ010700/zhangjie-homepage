// @ts-check
import { defineConfig } from "astro/config";

// ============================================================
// ★ GitHub Pages 部署配置（部署前需要确认这两行的值）：
//   site = https://<你的GitHub用户名>.github.io
//   base = /<仓库名>
// 例如用户名 zhangjie、仓库 zhangjie-homepage：
//   site: "https://zhangjie.github.io", base: "/zhangjie-homepage"
// 本地开发（npm run dev）不受影响，改内容不需要动这个文件。
// ============================================================
export default defineConfig({
  site: "https://zj010700.github.io",
  base: "/zhangjie-homepage",
  trailingSlash: "ignore",
});
