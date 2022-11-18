import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite 配置
    plugins: [vue(), vueJsx()],
    publicDir: "public",
    base: "./",
    root: "./vue",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./vue", import.meta.url)),
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
