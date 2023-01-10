# elapp

[中文](readme_CN.md) | English

**Author**: Jack Lee (李俊才)

**Author Email**: [291148484@163.com](mailto:291148484@163.com)

**LICENSE**: [MIT](https://github.com/jacklee1995/electron-vite-ts-app/blob/master/LICENSE)

**GitHub**: https://github.com/jacklee1995/electron-vite-ts-app

# brief introduction

Elapp is an Electron desktop application framework developed by TypeScript language using Vite as a development and construction tool. The framework consists of project template, scaffolding and component library. Template is a basic elapp application, which is created and customized by @elapp/cli process.

# Project structure

```tree
[elapp]
   ├─[process_main]                 # Main process source code
   │   ├─[src]
   │   │   ├─[apps]                 # The main process application set manages the corresponding application windows.
   │   │   │   ├─[App1]
   │   │   │   ├─[App2]
   │   │   │   └─...
   │   │   ├─[associations]         # Register system association
   │   │   ├─[check]                # Application initialization check
   │   │   ├─[develop_tools]        # Some tools used to develop the environment
   │   │   ├─[logger]               # logger
   │   │   ├─[sys]                  # Manage system resources
   │   │   └─[window]               # Window management related
   │   └─[types]
   ├─[process_render]               # A set of subprojects for the rendering process.
   │   ├─[render_app_1]
   │   ├─[render_app_2]
   │   └─[nodetools]                # Some NodeJS code, mainly used for building tools of rendering process, such as Vite.
   ├─[public]                       # The static public resource file of the rendering process
   ├─[VITE_ENVS]                    # Environment variables required by Vite
   └─[build]                        # Build project
      ├─[assets]                    # Used to store resources needed for compilation, such as icons.
      ├─[release]                   # Used to store the compiled files of each release version.
      │   ├─[v0.0.1]
      │   ├─[v0.0.2]
      │   └─...
      ├─[renders]                   # Build all rendering process sub-applications
      │   ├─[App1]
      │   ├─[App2]
      │   └─...
      ├─[sources]                  # The files directly packaged into the installation package will be written into the directory of the application with the installation of the application.
      │   ├─[chrome_extension]
      │   ├─[dll]
      │   └─[script]
      └─[src]                      # Compiled javascript code for main process of electron
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

# Download

## Install from github

```
git clone https://github.com/jacklee1995/elapp.git
```

## Install from gitee

```
https://toscode.gitee.com/jacklee1995/electron-vite-ts-app.git
```

## Install project dependencies

### Install powershell 7.x (recommended, not required)

PowerShell-7.3.0 地址：

```
https://github.com/PowerShell/PowerShell/releases/download/v7.3.0/PowerShell-7.3.0-win-x64.msi
```

WIndows system, if not installed in, you need to manually replace the pwsh string in the command value as powershell.

## Install dependencies

```
pnpm install
```

# Get and install this template as init electron project

## Download from github or gitee

**Note**: You need to download and install a git tool from [https://git-scm.com/](https://git-scm.com/) first

use git hub

```
git clone https://github.com/jacklee1995/electron-vite-ts-app.git
```

or use gitee

```
git clone https://gitee.com/jacklee1995/electron-vite-ts-app.git
```

## Install Dependencies

```
pnpm inst
```

# Run App

## run render process dev serve only

```
pnpm run start
```

## Run app

```
pnpm run serve
```

# Build

## build vite only

```
pnpm run build:renders
```

## build installer

```
pnpm run build
```

# Informations

## Before use

If you have powershell v7.x.x installed, you can ignore this subsection. Otherwise, you need to replace all `pwsh` in the script field with `powershell` in `package.json` file.

## NODE_ENV

Npm has a default configuration item - `production`, and when it is set to true, the dependency packages under devDependencies will not be installed. This means that when the environment variable `NODE_ENV` is set in your system and its value is `production`, if you directly use the command `npm install`, some dependencies used in the development environment may not be installed.
