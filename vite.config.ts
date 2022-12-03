import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite 配置
    plugins: [vue(), vueJsx()],
    server: {
      port:packageJson.devlepment.serve.port
    },
    publicDir: "public",
    base: "./",
    root: "./process_render",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./process_render", import.meta.url)),
        "#": fileURLToPath(new URL("./process_main", import.meta.url)),
      },
    },
    build: {
      target: 'modules',
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      emptyOutDir: true,
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
