import { APP_NAME } from "../../settings";

export const winparams = {
    width: 799,
    height: 529,
    resizable: true,
    minWidth: 699,
    minHeight: 496,
    transparent: false,  //透明
    opacity: 1,
    hasShadow: true,
    movable: true,    // 可移动
    minimizable: true,
    maximizable: true,
    closable: true,
    focusable: true,
    alwaysOnTop: false,
    fullscreen: false,
    fullscreenable: true,
    fullscreenWindowTitle: false,
    kiosk: false,
    title: APP_NAME,
    icon: "../../../public/favicon_256x256.ico",
    show: true,
    paintWhenInitiallyHidden: true,
    frame: true,  
    parent: null,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      // preload: path.join(__dirname, 'preloads'),
      // 当 `false` 时，它将禁用同源策略(通常由人们使用测试网站)，
      // 并且如果用户没有设置此选项，则将`allowRunningInsecureContent`  设置为`true`。
      // 默认值为 `true`。
      // webSecurity: false,
    }
  }