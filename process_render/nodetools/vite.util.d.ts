declare type Recordable<T = any> = Record<string, T>;

/** 所需环境变量值类型 */
declare interface ViteEnv {
  VITE_RENTER_LOADING_PORT: number;
  VITE_RENTER_INDEX_PORT: number;
}

export {
    Recordable,
    ViteEnv
}