import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ja",
  title: "idbok",
  description: "idbok documentation site",
  base: "/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Articles", link: "/articles/" },
      { text: "Specs", link: "/specs/" },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/nbifrye/idbok" }],
  },
});
