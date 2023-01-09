import * as fs from "fs";
import { mkdir } from 'node:fs/promises';
import { APP_DATAS_BASE_DIR, DB_ABSOLUTE_PATH, DEFAULT_DATA_HOME, logger } from '../settings'
// import * as sqlite3 from "sqlite3";
// import { open } from "sqlite";

/**检查应用目录 */
export function checkAppDataPath() {
  if (fs.existsSync(APP_DATAS_BASE_DIR)) {
    return Promise.resolve("OK. 应用数据目录已经存在。")
  } else {
    logger.warn("应用数据目录不存在！");
    logger.info("将在以下位置建立应用数据目录：", APP_DATAS_BASE_DIR);
    return mkdir(APP_DATAS_BASE_DIR, { recursive: true })
  }
}

/**检查数据库文件 */
// export function checkDBFile() {
//   if (fs.existsSync(DB_ABSOLUTE_PATH)) {
//     logger.info("OK. 数据库已经存在。")
//     return Promise.resolve(DB_ABSOLUTE_PATH)
//   } else {
//     logger.warn("应用配置数据库不存在！");
//     logger.debug("将在以下位置建立数据库：", DB_ABSOLUTE_PATH);
//     return new Promise((resolve, reject) => {
//       try {
//         new sqlite3.Database(DB_ABSOLUTE_PATH);
//         logger.debug(`OK. 已经在如下位置建立了数据库文件：${DEFAULT_DATA_HOME}`)
//         resolve(DEFAULT_DATA_HOME);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
// }

/**是否存在配置数据库 */
function existDBFile() {
  return fs.existsSync(DB_ABSOLUTE_PATH);
}

export async function checkAppRunEnv() {
  // 先检查应用数据目录
  await checkAppDataPath()
    // .then(
    //   (value) => {
    //     logger.info(value);
    //     return checkDBFile(); // 下一个任务是检查数据库
    //   },
    //   (reason) => {
    //     logger.error("由于以下原因，应用数据目录创建失败！")
    //     logger.fatal(reason)
    //   }
    // )
    // // 再检查数据库
    // .then(
    //   () => {
    //     // open 函数返回的是一个连接 SQLite 的 Promise 对象
    //     return open({
    //       filename: DEFAULT_DATA_HOME,
    //       driver: sqlite3.Database,
    //     })
    //   },
    //   (reason) => {
    //     logger.error("由于以下原因，应用配置数据库创建失败！");
    //     logger.fatal(reason)
    //   }
    // )
    // // 检查表是否存在
    // // 若不存在时，创建这些表
    // .then(
    //   async (dataBaseObj: any) => {
    //     try {
    //       // sqlite数据库会自动维护一个系统表sqlite_master, 保存所有表格信息
    //       const res = await dataBaseObj.all("select * from sqlite_master where name = 'system';")
    //       if (res.length === 0) {
    //         logger.debug("未找到相关配置表，将建立新的配置表并赋予初始数据。")
    //         // 系统配置
    //         logger.info("正在创建系统配置表。")
    //         dataBaseObj.exec('CREATE TABLE system (INIT_TIME, VERSION, SYSTEM_COLOR_THEME, NOTES_PATH)');
    //         dataBaseObj.exec(`INSERT INTO system VALUES ("${new Date()}", "0.0.1", NULL, "${DEFAULT_DATA_HOME}")`)
    //         logger.info('OK!');

    //         // MARKDOWN 代码高亮主题
    //         logger.info("正在创建 代码高亮 主题表")
    //         dataBaseObj.exec('CREATE TABLE highlight_code_theme (CREATE_TIME, THEME_ID, JSON_DATAS)');
    //         logger.info('OK!');

    //         // MARKDOWN VIEWER 主题
    //         logger.info("正在创建 MARKDOWN 阅读器主题表");
    //         dataBaseObj.exec('CREATE TABLE markdown_viewer_theme (CREATE_TIME, THEME_ID, JSON_DATAS)');


    //         // MARKDOWN 偏好配置
    //         logger.info("正在创建 MARKDOWN 偏好表")
    //         dataBaseObj.exec('CREATE TABLE markdown_preference (HIGHLIGHT_CODE_THEME, MARKDOWN_VIEWER_THEME, USE_MINI_MAP, USE_LINE_NUM, EDITOR_MODE,  AUTO_SAVE_TIME_SPAN)');
    //         logger.info('OK!');
    //       }
    //       else {
    //         logger.info("数据据已经存在。")
    //       }
    //       return Promise.resolve(dataBaseObj)
    //     } catch (error) {
    //       logger.error("配置数据加载失败");
    //       logger.fatal(error);
    //     }

    //   },
    //   (reason) => {
    //     logger.error("由于以下原因，数据库连接失败！")
    //     logger.fatal(reason)
    //   }
    // )
    // 检查启动应用的最基本配置是否存在
    // - 若存在则加载这些数据
    // - 若不存在则写入默认数据
    .then(
      (dataBaseObj) => {

      }
    )
}