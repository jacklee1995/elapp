import { BrowserWindow } from "electron";
import { winparams } from "./params";
import { logger, WINDOW_PORT, RENDER_HTML_PATH } from "../../settings";
import { mainWindowIDProxy, setWindowById } from "../../window/manager";

function newWinMain() {
  const window = new BrowserWindow(winparams as any);
  logger.debug(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
  const id = setWindowById(window);
  mainWindowIDProxy.value = id.toString();

  // window.loadURL(
  //   process.env.NODE_ENV === "production"
  //     ? `file://${RENDER_HTML_PATH.index}`
  //     : `http://127.0.0.1:${WINDOW_PORT.index}/`
  // );

  if (process.env.NODE_ENV === "development") {
    logger.debug(
      `Start Main Window At URL: http://localhost:${WINDOW_PORT.index}/`
    );
    window.loadURL(`http://127.0.0.1:${WINDOW_PORT.index}/`);
  } else {
    window.loadFile(`${RENDER_HTML_PATH.index}`);
  }

  // Open the DevTools.
  if (process.env.NODE_ENV !== "production") {
    window.webContents.openDevTools();
  }
  require("@electron/remote/main").enable(window.webContents);
  mainWindowIDProxy.value = id.toString();
  return id;
}

export { newWinMain };
