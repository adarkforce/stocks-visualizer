import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import DefineOptions from "unplugin-vue-define-options/vite";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import vuetify from "vite-plugin-vuetify";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),

    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      styles: {
        configFile: "src/styles/variables/_vuetify.scss",
      },
    }),
    Pages({}),
    Layouts(),
    Components({
      dirs: ["src/@core/components"],
      dts: true,
    }),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      vueTemplate: true,
    }),
    chunkSplitPlugin({
      strategy: "default",
    }),
    DefineOptions(),
  ],
  define: {
    "process.env": {
      BACKEND_URL: "https://stocks-visualizer.com",
      NODE_ENV: "production",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@core": fileURLToPath(new URL("./src/@core", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/@layouts", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/@components", import.meta.url)
      ),
      "@configured-variables": fileURLToPath(
        new URL("./src/styles/variables/_template.scss", import.meta.url)
      ),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    minify: "terser",
    terserOptions: {
      output: {
        comments: false, // This will remove all comments from the output files
      },
    },
  },
  optimizeDeps: {
    exclude: ["vuetify"],
    entries: ["./src/**/*.vue"],
  },
});
