import { defineConfig } from "vitepress";
// import vueJsx from "@vitejs/plugin-vue-jsx";
import postcssEach from "postcss-each";

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
        items: [{ text: "Button", link: "/components/button" },
          { text: "Collapse", link: "/components/Collapse" },
          { text: "Icon", link: "/components/Icon" },
          { text: "Tooltip", link: "/components/Tooltip" }
        ],
        
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
