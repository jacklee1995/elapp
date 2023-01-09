import * as path from "path";
import * as os from "os";
import { app } from "electron";
import { setRuntimeLogger } from "./logger";



// 应用名
const APP_NAME = "elApp";

// Base 目录为项目根
const BASE_DIR = path.resolve(path.resolve(__dirname, "../"), "../");
// let BASE_DIR;
// if(process.env.NODE_ENV === "development"){
//   BASE_DIR = path.resolve(path.resolve(__dirname, "../"), "../");
// }else{
//   BASE_DIR = path.join('app.asar',path.resolve(path.resolve(__dirname, "../"), "../"));
// }


/* ****************************** 主进程目录 ****************************** */

// let MAIN_PROCESS_DIR: string;
// if(process.env.NODE_ENV === "production"){
//   MAIN_PROCESS_DIR = path.join(BASE_DIR, "app.asar");
// }else{
//   MAIN_PROCESS_DIR = path.join(BASE_DIR, "process_main");
// }

// const BUILD_DIR = path.join(BASE_DIR, "build");


// build file path
let BUILD_DIR: string;
// APP Icon Path
let APP_ICON_PATH: string;
if(process.env.NODE_ENV === "development"){
  BUILD_DIR = path.join(BASE_DIR, "build");
  APP_ICON_PATH = path.join(path.join(BASE_DIR, "assets"),"jcstudio_256x256.ico");
}
else{
  BUILD_DIR = ''
  APP_ICON_PATH = path.join(path.join(path.join(BASE_DIR,'app.asar'), "assets"),"jcstudio_256x256.ico");
}

// VITE ENV 将用于获取开发模式下调试时的端口
const VITE_ENVS_DIR = path.join(BASE_DIR, "VITE_ENVS");

// LOGS
const LOG_DIR = app.getPath("logs");
const APP_LOG_PATH = path.join(LOG_DIR, "app.log");
const APP_DATAFILE_LOG_PATH = path.join(LOG_DIR, "datefile.log");
const NET_LOG_PATH = path.join(LOG_DIR, "net.log");


// System user AppData
const APP_DATAS_BASE_DIR = path.join(
  path.join(path.join(os.homedir(), "AppData"), "Roaming"),
  APP_NAME
);
// Log File Save Directory
app.setAppLogsPath(path.join(APP_DATAS_BASE_DIR, "logs"));

// logger
const logger = setRuntimeLogger("info");

// Database - SQLite File
const DB_ABSOLUTE_PATH = path.join(APP_DATAS_BASE_DIR, "rundata.sqlite3");




logger.warn(`BASE_DIR = ${BASE_DIR}`)
logger.warn(`APP_ICON_PATH = ${APP_ICON_PATH}`)

const DEFAULT_DATA_HOME = path.join(APP_DATAS_BASE_DIR, "notes");

const WINDOW_PORT = {
  index: 5173,
  loading: 5174,
};

// const RENDER_PROCESS_DIR = path.join(BASE_DIR, "process_render");
const RENDER_DISTA_DIR = path.join(BUILD_DIR, "renders");

const RENDER_APP_PATH = {
  loading: path.join(RENDER_DISTA_DIR, "loading"),
  index: path.join(RENDER_DISTA_DIR, "index"),
};

const RENDER_HTML_PATH = {
  loading: path.join(RENDER_APP_PATH.loading, "index.html"),
  index: path.join(RENDER_APP_PATH.index, "index.html"),
};

export {
  APP_NAME,
  BASE_DIR,
  VITE_ENVS_DIR,
  LOG_DIR,
  APP_DATAFILE_LOG_PATH,
  NET_LOG_PATH,
  APP_DATAS_BASE_DIR,
  APP_LOG_PATH,
  logger,
  DB_ABSOLUTE_PATH,
  APP_ICON_PATH,
  DEFAULT_DATA_HOME,
  WINDOW_PORT,
  RENDER_HTML_PATH,
};
