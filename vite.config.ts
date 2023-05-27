import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n", "@vueuse/head", "@vueuse/core"],
      // auto-import.d.ts生成的位置(默认是在根目录)
      dts: "src/auto-import.d.ts"
    }),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ["src/components"],
      // ui库解析器
      resolvers: [ElementPlusResolver()],
      extensions: ["vue"],
      // 配置文件生成位置
      dts: "src/components.d.ts"
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    })
  ]
});
