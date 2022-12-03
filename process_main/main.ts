import { app, BrowserWindow } from "electron";
import * as path from "path";
import { logger, VUE_DIST_HTML, SERVER_PORT } from './params';

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    
  });

  logger.debug("process.env.NODE_ENV =", process.env.NODE_ENV);
  logger.debug(`file://${VUE_DIST_HTML}`);
  // mainWindow.loadURL(' http://localhost:5175/')

  mainWindow.loadURL(
    process.env.NODE_ENV !== 'production'
      ? `http://localhost:${SERVER_PORT}/`
      : `file://${VUE_DIST_HTML}`
  );

  // Open the DevTools.
  if (process.env.NODE_ENV !== "production") {
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