import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  assetsInclude: ["**/*.mov"],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: true,
  },
  plugins: [react(), svgr(), jsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/utils/_variables.scss";
        @import "./src/styles/utils/_mixins.scss";
        @import "./src/styles/shared/links.scss";
        `,
      },
    },
  },
});
