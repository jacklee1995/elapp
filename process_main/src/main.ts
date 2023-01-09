import { app, ipcMain, globalShortcut } from "electron";
import { logger, NET_LOG_PATH } from "./settings";
import { checkAppRunEnv } from "./check";

import {
  winDict,
  hideWindowById,
  showWindowById,
  closeWindowById,
  mainWindowIDProxy,
  getWindowById,
  maximizeWindowById,
  minimizeWindowById,
  restoreWindowById,
} from "./window/manager";
import { newWinLoading } from "./apps/Loading/index";
import { newWinMain } from "./apps/Index";


// 记录会话的网络事件。

import { createTrayIcon } from "./sys/tray";
import { fileAssociationsOpen } from "./associations/file";

const gotTheLock = app.requestSingleInstanceLock(winDict);

if (!gotTheLock) {
  app.quit();
} else {
  app.on("will-finish-launching", () => {
    app.on("open-file", (event, path: string) => {
      event.preventDefault();
      path && fileAssociationsOpen(path);
    });
  });
  app.on("second-instance", (event, argv, workingDirectory, additionalData) => {
    if (process.platform !== "darwin") {
      const path = argv[argv.length - 1]; // 最后一个参数是文件绝对路径
      path && fileAssociationsOpen(path);
    }
  });
  app
    .whenReady()
    .then(
      () => {
        return checkAppRunEnv();
      },
      (reason) => {
        logger.error(reason);
      }
    )
    // .then(
    //   async () => {
    //     await netLog.startLogging(NET_LOG_PATH);
    //   },
    //   (reason) => {
    //     logger.error(reason);
    //   }
    // )
    .then(
      async () => {
        require("@electron/remote/main").initialize();
        const id = newWinLoading();
        const WinLoading = getWindowById(id);
        setTimeout(() => {
          (WinLoading as any).close();
          newWinMain().toString();
        }, 1600);

        return Promise.resolve();
      },
      (reason) => {
        logger.error("主窗口创建失败!");
        logger.fatal(reason);
      }
    )
    .then(
      () => {
        // const { createTrayIcon } = require("./tray");
        const trayIcon = createTrayIcon();
      },
      (reason) => {
        logger.error(reason);
      }
    );

  ipcMain.on("ipc-window-manager-by-id", (event, arg) => {
    const id = arg.id;
    const action = arg.action;
    switch (action) {
      case "hide":
        hideWindowById(id);
        break;
      case "show":
        showWindowById(id);
        break;
      case "maximize":
        maximizeWindowById(id);
        break;
      case "minimize":
        minimizeWindowById(id);
        break;
      case "restore":
        restoreWindowById(id);
        break;
      case "close":
        closeWindowById(id);
        break;
    }
  });
}

