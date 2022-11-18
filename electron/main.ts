import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as log4js from "log4js";
import { VUE_DIST_HTML } from './params'

const logger = log4js.getLogger();
logger.level = "debug";

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 800,
  });

  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, "../vue/dist/index.html"));
  // mainWindow.loadURL('http://localhost:5173/')

  logger.fatal("process.env.NODE_ENV =", process.env.NODE_ENV)

  logger.warn(`file://${VUE_DIST_HTML}`)

  mainWindow.loadURL(
    process.env.NODE_ENV === 'development'
      ? `http://localhost:5173/`
      : `file://${VUE_DIST_HTML}`
  );

  // Open the DevTools.
  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools()
  }
  return mainWindow
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady()
  .then(() => {
    const mainWindow = createWindow();

    app.on("activate", function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
    return Promise.resolve(mainWindow);
  });

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
