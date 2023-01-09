import { APP_NAME } from "../../settings";
import * as path from 'path';

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

      // 当 `false` 时，它将禁用同源策略(通常由人们使用测试网站)，
      // 并且如果用户没有设置此选项，则将`allowRunningInsecureContent`  设置为`true`。
      // 默认值为 `true`。
      // webSecurity: false,

      // 是否在单独的JavaScript上下文中运行电子API和指定的`preload`脚本。默认为`true`。
      // `preload`脚本在其中运行的上下文将只能访问它自己专用的`document`和`window`全局变量，以及它自己的一组JavaScript内置变量(`Array`, `Object`, `JSON`, 等)。)，
      // 这些对于加载的内容都是不可见的。
      // 当加载可能不可信的远程内容时，应使用此选项，以确保加载的内容不会篡改`preload`脚本和正在使用的任何电子API。
      // 这个选项使用了 Chrome 内容脚本使用的相同技术。您可以在开发工具中访问该上下文，方法是在控制台选项卡顶部的组合框中选择'Electron Isolated Context'条目。
      contextIsolation: false,

    },
  }