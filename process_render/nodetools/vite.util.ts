import path from 'path';
import type { Recordable, ViteEnv } from './vite.util.d';
import { BUILD_DIR, outBaseDir } from './project';


/** 开发环境 */
function isDevFn(mode: string): boolean {
  return mode === 'development';
}

/** 生产环境 */
function isProdctFn(mode: string): boolean {
  return mode === 'production';
}



/**
 * Vite 环境变量包装器
 * 将所有环境变量配置文件读入 process.env
 * @param envConf
 * @returns
 */
function wrapperEnv(envConf: Recordable): ViteEnv {
  const res: any = {};
  
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;
    
    // 只保留包含 '_PORT' 的环境变量
    if (envName.includes('_PORT')) {
      realName = Number(realName);
    }
    
    res[envName] = realName;
    if (typeof realName === 'string') {
      process.env[envName] = realName;
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return res;
}

function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir);
}


export {
  isDevFn,
  isProdctFn,
  wrapperEnv,
  getRootPath
}