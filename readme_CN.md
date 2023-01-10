# elapp

[中文](https://github.com/jacklee1995/elapp/blob/elapp/readme.md "中文文档") | [English](https://github.com/jacklee1995/elapp/blob/elapp/readme.md "英文文档")

**作者**: Jack Lee (李俊才)

**作者邮箱**: [291148484@163.com](mailto:291148484@163.com)

**开源协议类型**: [MIT](https://github.com/jacklee1995/electron-vite-ts-app/blob/master/LICENSE)

**GitHub**:  [https://github.com/jacklee1995/elapp]()

# 简介

elapp 是一个使用 Vite  作为开发和构建工具的，通过 TypeScript 语言进行开发的 Electron 桌面应用框架。框架由 项目模板、脚手架、组件库构成。模板是一个基础的 elapp 应用，它由 @elapp/cli 进程创建、定制。

# 项目结构

```tree
[elapp]
   ├─[process_main]                 # 主进程源代码
   │   ├─[src]
   │   │   ├─[apps]                 # 主进程应用集，管理对应的各个应用窗口
   │   │   │   ├─[App1]
   │   │   │   ├─[App2]
   │   │   │   └─...
   │   │   ├─[associations]         # 注册系统关联
   │   │   ├─[check]                # 应用初始化检查
   │   │   ├─[develop_tools]        # 开发化境用到的一些工具
   │   │   ├─[logger]               # 日志器
   │   │   ├─[sys]                  # 管理系统资源
   │   │   └─[window]               # 窗口管理相关
   │   └─[types]
   ├─[process_render]               # 渲染进程子项目集
   │   ├─[render_app_1]
   │   ├─[render_app_2]
   │   └─[nodetools]                # 一些 NodeJS 代码，主要用于渲染进程的构建工具，如 Vite
   ├─[public]                       # 渲染进程的静态公共资源文件
   ├─[VITE_ENVS]                    # Vite 所需的环境变量
   └─[build]                        # 构建项目
      ├─[assets]                    # 用于存放编译需要用到的资源，如图标
      ├─[release]                   # 用于存放各个发布版本编译后的文件
      │   ├─[v0.0.1]
      │   ├─[v0.0.2]
      │   └─...
      ├─[renders]                   # 构建后所有渲染进程子应用
      │   ├─[App1]
      │   ├─[App2]
      │   └─...
      ├─[sources]                  # 直接打包到安装包中的文件，将随着应用的安装写入应用的目录中
      │   ├─[chrome_extension]
      │   ├─[dll]
      │   └─[script]
      └─[src]                      # 编译的适用于 electron 的主进程 javascript 代码
         ├─[apps]
         │   ├─[Index]
         │   └─[Loading]
         ├─[associations]
         ├─[check]
         ├─[develop_tools]
         ├─[logger]
         ├─[sys]
         └─[window]
```


# 本地化

## 从 github 安装

```
git clone https://github.com/jacklee1995/elapp.git
```

## 从 gitee 安装

```
https://toscode.gitee.com/jacklee1995/electron-vite-ts-app.git
```


# 安装项目依赖

## 前提

### 安装 powershell 7.x （推荐、非必须）

PowerShell-7.3.0 地址：

```
https://github.com/PowerShell/PowerShell/releases/download/v7.3.0/PowerShell-7.3.0-win-x64.msi
```

WIndows中若不安装则需要手动替换 `pwsh` 为 `powershell` 。在 Linux 中

## 安装依赖

```
pnpm install
```
