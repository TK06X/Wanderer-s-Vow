<div align="center"><h1>Vue 3 + TypeScript + Vite</h1>

[![license](https://img.shields.io/github/license/anncwb/vue-vben-admin.svg)](LICENSE)
[![github](https://badgen.net/badge/icon/github?icon=github&label)](github)
![version](https://img.shields.io/badge/version-v1.03-blueviolet)
![View UI Plus](https://img.shields.io/npm/v/view-ui-plus.svg?style=flat-square)

</div>


## Author:June
## 一名从事PC端的00后开发者

- 下载
```bash
pnpm install
```

- 运行
```bash
pnpm serve
```

- 打包
```bash
pnpm bulid
```

- 2023年
- 3/25 -- 4/7
1. 学vue3

- 4-7
1. 新增LICENSE `MIT` 协议
2. 新增prettier.config.js 
3. vite.config.ts 服务器地址

- 4-11 
1. 主页搭建
2. 按需导入`ele-plus`
3. 学git管理并记录使用

- 4-12



# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

