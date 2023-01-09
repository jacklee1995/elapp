import log4js from 'log4js';
import { netLog } from "electron";

import { APP_LOG_PATH, APP_DATAFILE_LOG_PATH, NET_LOG_PATH } from "../settings";

function setRuntimeLogger(level="debug"): log4js.Logger{
  log4js.configure({
    appenders: {
      fileout: { 
        type: "file", 
        filename: APP_LOG_PATH, 
      },
      datafileout: {
        type: "dateFile",
        filename: APP_DATAFILE_LOG_PATH,
        pattern: "YYYY-MM-DD HH:mm:ss",
        maxLoSize: 1024 * 1024 *100,
        backups: 6
      },
      consoleout: { type: "console" },
    },
    categories: {
      default: { appenders: ["fileout", "consoleout"], level: "info" },
      anything: { appenders: ["consoleout"], level: "debug" },
    },
  });
  const logger = log4js.getLogger();
  
  logger.level = level;
  return logger;
}

async function setnetLog(){
  await netLog.startLogging(NET_LOG_PATH)
}


export {
  setRuntimeLogger,
  setnetLog
}