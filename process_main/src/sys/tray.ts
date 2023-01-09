// 系统托盘
import { app, BrowserWindow, Tray, Menu } from 'electron';
import { APP_ICON_PATH } from '../settings';

// import { openFile, openPath, ipcMarkdownWindow, ipcSketchWindow, ipcMindmapWindow } from '../associations/fs_manager';

import {
  getWindowById,
  mainWindowIDProxy
} from '../window/manager'

function createTrayIcon(){
  let trayIcon = new Tray(APP_ICON_PATH);
  
  const trayMenu = Menu.buildFromTemplate([
    { label:"新 建", submenu: [
      { label:"Markdown 笔记", click: ()=>{
        // ipcMarkdownWindow()
      }},
      { label:"手写笔记", click: ()=>{
        // ipcSketchWindow()
      }},
      { label:"思维导图", click: ()=>{
        // ipcMindmapWindow()
      }},
      { label:"演示文稿", click: ()=>{
        // ipcMindmapWindow()
      }},
    ] },
    { type: 'separator' },
    { label:"打 开" , submenu:[
      { label:"本地文件", click: ()=>{
        // openFile()
      }},
      { label:"工作目录", click: ()=>{
        // openPath()
      }},
    ]},
    { type: 'separator' },
    { label:"显示主界面", click: ()=>{
      const mainWindow = getWindowById(mainWindowIDProxy.value);
      mainWindow.show();
    }},
    { label:"最小化到托盘", click: ()=>{
      
      const wins = BrowserWindow.getAllWindows()
      for (const win of wins) {
        win.hide();
      }
    }},
    { type: 'separator' },
    { label:"意见反馈", click: ()=>{

    }},
    { label:"检查更新", click: ()=>{
      
    }},
    { type: 'separator' },
    { label:"退出应用", click: ()=>{
      app.quit()
    }},
  ])
  
  trayIcon.setToolTip("el-app");
  // 绑定右键菜单
  trayIcon.setContextMenu(trayMenu);
  trayIcon.on('click', ()=>{
    const mainWindow = getWindowById(mainWindowIDProxy.value);
    mainWindow.show();
  });
  trayIcon.on('double-click', ()=>{
    const wins = BrowserWindow.getAllWindows()
    for (const win of wins) {
      win.show();
    }
  });
  return trayIcon
}

export {
  createTrayIcon
}