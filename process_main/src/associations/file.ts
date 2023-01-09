import path from "path";
import { newWinMain } from "../apps/Index";
import { logger } from "../settings";
import { getWindowById, mainWindowIDProxy } from "../window/manager";
import { setPathForWindowById } from "./fs_manager";


/**通过不同文件类型打开不同的文件阅读器 */
function fileViewer(filepath: string, mainWindow: any) {
    logger.warn("File PATH = "+filepath)
    const extensionName = path.extname(filepath);
    let windowId;
    switch (extensionName) {
      // 打开纯文本文件阅读器
      case ".mp3": {
        windowId = newWinPlayerMp3();
        setPathForWindowById(windowId, filepath);
      } break;
      // 打开 MarkDown 文件阅读器
      case ".mp4": {
        windowId = newWinPlayerMp4();
        setPathForWindowById(windowId, filepath)
      } break;
    }
  }

/**关联文件打开 */
export function fileAssociationsOpen(filepath: string) {
  
    const mainWindow = getWindowById(mainWindowIDProxy.value);
    // 若窗口未创建则创建窗口
    if (mainWindow === null) {
      newWinMain();
      return;
    }
    // 若最小化则还原
    if (mainWindow?.isMinimized()) {
      mainWindow?.restore();
    }
    // 窗口获取焦点
    mainWindow?.focus();
    // 窗口正常打开状态
    if (mainWindow) {
      // 发送消息以展示文件
      fileViewer(filepath, mainWindow);
    }
  }

/**用于创建 .mp3 文件窗口（未实现） */
function newWinPlayerMp3(): any {
    throw new Error("Function not implemented.");
}

/**用于创建 .mp4 文件窗口（未实现） */
function newWinPlayerMp4(): any {
    throw new Error("Function not implemented.");
}
