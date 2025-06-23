import { defineConfig } from "vitepress";
// import vueJsx from "@vitejs/plugin-vue-jsx";
import postcssEach from "postcss-each";
import { fileURLToPath, URL } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  // srcDir: "components",
  vite: {
    // plugins: [vueJsx()],
    css: {
      postcss: {
        plugins: [postcssEach()],
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Basic",
        items: [
          { text: "Icon", link: "/components/Icon" },
          { text: "Button", link: "/components/button" },
          { text: "Collapse", link: "/components/Collapse" },
          { text: "Tooltip", link: "/components/Tooltip" },
          { text: "Message", link: "/components/Message" },
          { text: "Dropdown", link: "/components/Dropdown" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
