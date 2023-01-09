import path from 'path';

/** 大项目根路径 */
const BASE_DIR = path.resolve(path.resolve(__dirname, '../'),'../');

/** Vite 环境变量（渲染进程共用）路径 */
const ENV_PATH = path.join(BASE_DIR, 'VITE_ENVS');

/** 公共资源（渲染进程共用）路径 */
const PUBLIC_DIR = path.join(BASE_DIR, 'public');

/** 构建项目路径 */
const BUILD_DIR = path.join(BASE_DIR, 'build');

/** 所有渲染进程输出的公共目录 */
const outBaseDir = path.join(BUILD_DIR, 'renders');

export {
    BASE_DIR,
    ENV_PATH,
    PUBLIC_DIR,
    BUILD_DIR,
    outBaseDir
}