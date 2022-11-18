# electron-vite-ts-app

Author: Jack Lee (李俊才)

Author Email: 291148484@163.com

LICENSE: MIT

GitHub: https://github.com/jacklee1995/electron-vite-ts-app

# What's this

# Brief Introduction

This is an Electron desktop template project written by TypeScript and built by Vite, in which Vue3 is used as the front-end writing framework of the rendering process.

## What to do 

Next, I plan to introduce React as a scheme to build the front page of the rendering process in the same way. Next, all of these will be able to generate different template projects through a new project-this project is a scaffolding tool through question and answer.

# Install this template as init electron project

**Note**: You need to download and install a git tool from [https://git-scm.com/](https://git-scm.com/) first

```
git clone https://github.com/jacklee1995/electron-vite-ts-app.git
```

# Install Dependencies

```
npm run install

# or

yarn install
```

# Run
## run vite app 
```
npm run vite:serve
```

## Run electron app

### Run without sqy sourcefile change

```
npm run electron
```

### Run with sqy sourcefile change

```
npm run serve
```

# Build

## build vite app

```
npm run vite:build
```

## build installer
```
npm run build
```

# Informations

 Npm has a default configuration item-` production`, and when it is set to true, the dependency packages under devDependencies will not be installed. This means that when the environment variable ` NODE_ENV is set in your system and its value is ` production, if you directly use the command ` npm install, some dependencies used in the development environment cannot be installed.
