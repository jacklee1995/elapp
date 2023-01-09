import VueMacros from 'unplugin-vue-macros/vite';
import Vue from '@vitejs/plugin-vue'
import VueJsx from "@vitejs/plugin-vue-jsx";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import { ENV_PATH, outBaseDir, PUBLIC_DIR } from '../nodetools/project';
import { wrapperEnv } from '../nodetools/vite.util';

/**打包输出目录 */
const outDir = path.join(outBaseDir,'loading');

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, ENV_PATH, "");

  const viteEnv = wrapperEnv(env);
  const { VITE_RENTER_INDEX_PORT } = viteEnv;

  return {
    // vite 配置
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: Vue(),
          vueJsx: VueJsx(),
        },
      }),
    ],
    base: "./",
    root: ".",
    envPrefix: "VITE_",
    envDir: ENV_PATH,
    publicDir: PUBLIC_DIR,
    server: {
      host: "127.0.0.1",
      port: VITE_RENTER_INDEX_PORT,
    },
    resolve: {
      alias: {
        "@index": path.resolve(__dirname, "src"),
      },
    },
    build: {
      target: "modules",
      outDir: outDir,
      assetsDir: "assets",
      sourcemap: false,
      emptyOutDir: true,
      copyPublicDir: true,
    },
    // 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    logLevel: "info",
  };
});
