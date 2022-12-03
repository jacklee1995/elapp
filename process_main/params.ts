import * as path from "path";
import * as log4js from "log4js";
import * as packageJson from '../package.json';
import { app } from "electron";

const logger = log4js.getLogger();
logger.level = packageJson.devlepment.logger.level;

/**开发服务器端口 */
const SERVER_PORT = process.env.NODE_ENV === 'production'? packageJson.production.serve.port :packageJson.devlepment.serve.port;


const APP_NAME = packageJson.name;
const BASE_DIR = path.resolve(path.resolve(__dirname, '../'), '../');
const VUE_DIST_HTML = path.join(path.join(path.join(BASE_DIR, 'process_render'), 'dist'), 'index.html')
const LOG_DIR = app.getPath('logs');
const APP_LOG_PATH = path.join(LOG_DIR,"app.log");
const NET_LOG_PATH = path.join(LOG_DIR, 'net.log');
export {
    logger,
    APP_NAME,
    BASE_DIR,
    SERVER_PORT,
    VUE_DIST_HTML,
    APP_LOG_PATH,
    NET_LOG_PATH
}