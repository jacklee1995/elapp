import { BrowserWindow, ipcMain } from "electron";
import { winparams } from "./params";
import { logger, WINDOW_PORT, RENDER_HTML_PATH } from "../../settings";
import { setWindowById } from "../../window/manager";

function newWinLoading() {
  const window = new BrowserWindow(winparams as any);
  logger.info("create Loading window...");
  const id = setWindowById(window);

  // loadingWindow.loadFile(`${RENDER_HTML_PATH.loading}`)

  if (process.env.NODE_ENV === "development") {
    logger.debug(
      `Start Main Window At URL: http://localhost:${WINDOW_PORT.index}/`
    );
    window.loadURL(`http://127.0.0.1:${WINDOW_PORT.index}/`);
  } else {
    window.loadFile(`${RENDER_HTML_PATH.index}`);
  }
  return window;
}

export { newWinLoading };
