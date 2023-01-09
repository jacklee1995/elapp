export const winparams = {
    width: 360,
    height: 360,
    resizable: true,
    minWidth: 360,
    minHeight: 360,
    transparent: true,  //透明
    opacity: 1,
    hasShadow: false,
    movable: false,    // 可移动
    alwaysOnTop: true,
    show: true,
    frame: true,  
    parent: null as null,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: false,
      javascript: true,
      contextIsolation: false,

    },
  }