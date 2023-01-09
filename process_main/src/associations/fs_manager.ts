import { logger } from "../settings";
import { ABSPath, PathDict } from "types/global";

const pathDict: PathDict = {};

const pathDictProxy = new Proxy(pathDict, {
  get: function (obj: PathDict, prop: string):ABSPath {
    return obj[prop];
  },
  set: function (obj: PathDict, prop: string, value: ABSPath) {
    if (obj[prop]) {
      return false;
    } else {
      obj[prop] = value;
      return true;
    }
  },
  has(target: PathDict, key: string) {
    if (Object.getOwnPropertyNames(target).includes(key)) {
      return true;
    } else {
      return false;
    }
  },
  ownKeys: function (target: PathDict) {
    return [...Object.getOwnPropertyNames(target)];
  },
  deleteProperty: function (target: PathDict, prop: string) {
    try {
      delete target[prop];
      return true;
    } catch (e) {
      logger.warn(e);
      return false;
    }
  },
});

/** 记录某个编辑器 Window 的文件路径 */
function setPathForWindowById(id: string, path: ABSPath):void {
  try {
    pathDictProxy[id] = path;
  } catch (e) {
    logger.error(
      `Can not set Path '${path}' for Window By ID '${id}', as the following reasons:\n${e}`
    );
  }
}

/** 查询某个编辑器 Window 的文件路径 */
function getPathForWindowById(id: string):ABSPath {
  try{
    return pathDictProxy[id]
  } catch (e) {
    `Can not get path for Window ID`
  }
}

/**删除为编辑器 Window 记录的文件路径 */
function deleteRecodeFromPathDict(id: string) {
  delete pathDictProxy[id]
}

export { setPathForWindowById, getPathForWindowById, deleteRecodeFromPathDict };
