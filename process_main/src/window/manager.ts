import { logger } from "../settings";
import { WindowDict, EWindow } from "../../types/global";

const winDict:WindowDict = {};
const mainWindowID:{value:undefined|string} = {value:undefined};

const mainWindowIDProxy = new Proxy(mainWindowID,{
  get: function(obj:{value:undefined|string}, prop:string){
    return obj.value
  },
  set: function(obj:{value:undefined|string}, prop:'value', value){
    obj['value'] = value
    return true;
  }
})

const WindowDictProxy = new Proxy(winDict, {
  get: function(obj:WindowDict, prop:string){
    return obj[prop]
  },
  set: function(obj:WindowDict, prop:string, value:EWindow){
    if(obj[prop]){
      logger.error(`Window id '${prop}' has already existed.`)
      return false
    }else{
      obj[prop] = value;
      return true;
    }
  },
  has(target:WindowDict, key:string) {
    if(Object.getOwnPropertyNames(target).includes(key)){
      return true
    }else{
      return false
    }
  },
  ownKeys:function(target:WindowDict){
    return [...Object.getOwnPropertyNames(target)]
  },
  deleteProperty: function(target:WindowDict, prop:string){
    try{
      delete target[prop]
      return true;
    }catch(e){
      logger.warn(e);
      return false;
    }
  }
})

/* ************************************* 通过 ID 的窗口管理 ************************************* */

/** 通过 id 托管窗口 */
function setWindowById(Window: EWindow){
  try{
    const id = Window.id.toString();
    WindowDictProxy[id] = Window;
    return id;
  }
  catch(e){
    logger.error(`Can not set Window By ID '${Window.id}', as the following reasons:\n${e}`)
    return ;
  }
}

/**通过ID索引窗口 */
function getWindowById(id:string):EWindow{
  return WindowDictProxy[id]
}

/**通过 ID 关闭窗口 */
function hideWindowById(id:string){
  try{
    getWindowById(id).hide()
    return true;
  }catch(e){
    logger.error(`Can not hide Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}

/**通过 ID 显示窗口 */
function showWindowById(id:string){
  try{
    getWindowById(id).show()
    return true;
  }catch(e){
    logger.error(`Can not show Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}

/**通过 ID 隐藏窗口 */
function closeWindowById(id:string){
  try{
    getWindowById(id).close();
    delete WindowDictProxy[id];
    return true;
  }catch(e){
    logger.error(`Can not close Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}

/**通过 ID 最大化窗口 */
function maximizeWindowById(id:string){
  try{
    getWindowById(id).maximize();
    delete WindowDictProxy[id];
    return true;
  }catch(e){
    logger.error(`Can not maximize Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}

/**通过 ID 最小化窗口 */
function minimizeWindowById(id:string){
  try{
    getWindowById(id).minimize();
    delete WindowDictProxy[id];
    return true;
  }catch(e){
    logger.error(`Can not minimize Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}

/**通过 ID 还原窗口 */
function restoreWindowById(id:string){
  try{
    getWindowById(id).restore();
    delete WindowDictProxy[id];
    return true;
  }catch(e){
    logger.error(`Can not restore Window By ID '${id}', as the following reasons:\n${e}`)
    return false;
  }
}

/* ************************************* 操作所有窗口 ************************************* */

/**关闭所有窗口 */
function closeAllWindows(){
  Object.getOwnPropertyNames(WindowDictProxy).forEach(
    (id:string)=>{
      WindowDictProxy[id].close();
      delete WindowDictProxy[id];
    }
  )
}

export {
  winDict,
  mainWindowIDProxy,
  WindowDictProxy,
  getWindowById,
  setWindowById,
  hideWindowById,
  showWindowById,
  closeWindowById,
  maximizeWindowById,
  minimizeWindowById,
  restoreWindowById,
  closeAllWindows,
  // globalIdToIDProxy
}