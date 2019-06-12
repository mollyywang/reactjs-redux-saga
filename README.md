# A shopping web app based reactjs,redux-saga and antd. 基于reactjs，redux-saga和antd的购物网站单页应用。
 This is a shopping web application developped with reactjs, redux-saga, axios and antd. 这是一个使用reactjs,redux-saga,axios 和 antd 等的单页网页应用。

**Comparing with the previous project,(see more info: https://github.com/SoloistWang/reactjs-redux-antd)
this project contains the following optimizations:相比前一个版本，这个项目有以下优化:**
- 1.Better folder architecture. 架构优化。
- 2.Using request interception to handle all http request and response. 对ajax请求统一拦截处理。
- 3.Using `react-loadable` to load components with dynamic imports. 动态加载路由模块。
- 4.Using `reduxsauce` to handle reducers. 使用reducers工具管理actions。
- 5.Using `redux-saga` to fetch data asynchronously. 异步获取数据。
- 6.Using `eslint` to make code better. 检查代码，规范代码。
- 7.Using `redux-persist` to persisted state. 记录和保持状态
- 8.Using `redux-auth-wrapper` to handle authentication globally. 统一处理用户身份认证

## 1. Setting up. 

Clone this repo and adjust details in `package.json`. Remove the `.git` directory and `git init` to start fresh.

克隆这个仓库，调整适合自己项目的`package.json`，移除`.git`文件并使用`git init`来初始化。

```bash
git clone https://github.com/SoloistWang/reactjs-redux-saga.git
```

## 2. Config package.json. 

- [`antd`] An enterprise-class UI design language. 企业级设计组件库。
- [`axios`] Promise based HTTP client. 处理HTTP请求。
- [`babel-plugin-import`] Modular import plugin for babe. Babel模块化导入组件。
- [`less`] The dynamic stylesheet language. 动态样式语言。
- [`react-app-rewired`] Tweak the create-react-app webpack config(s). 调整webpack配置。
- [`redux`]  a predictable state container for JavaScript apps. 应用状态容器
- [`react-router`] Declarative routing for React. 声明路由。
- [`react-loadable`]  Loading components with dynamic imports. 动态加载组件。
- [`redux-auth-wrapper`] Decouple Authentication from components. 单独处理身份认证。
- [`redux-persist`] Persisted state. 记录和保持状态。
- [`redux-saga`] Fetch data asynchronously. 异步获取数据。
- [`reduxsauce`] Handle reducers. 使用reducers工具管理actions。
  
run `yarn install` to install the dependencies
运行 `yarn install` 来加载依赖包

```bash
yarn install
```

## 3. Directory structurem. 
- `node_modules` Dependency package. 依赖包。
- `public`: Static source. 静态资源。
- `src`: App source. 项目源码。
  - `apis`: 
  - `components`: static components. 静态组件。
  - `features`: main function modules. 主要功能模块。
  - `pages`: views. 页面。
  - `reducers`: Receive antions then change state. 状态处理函数。
  - `sagas` Handle data fetching and processing. 数据获取和处理。
  - `styles`: CSS, Less, and Icons. 样式文件。
  - `utils`: Common and general functions. 基础和全局函数。
- config-overrides.js:Personal config. 个人设置。

## 4. Using `yarn` scripts. 

- Start the app in development mode. 测试环境运行项目。
```bash
yarn start
```

- Compile the app. Files are emitted to `dist`. 编译项目，文件导出到`dist`文件夹。
```bash
yarn build 
```

- Runs tests. 运行测试脚本。
```bash
yarn test 
```

- Runs lint. 检查代码。
```bash
npm run lint 
```

## 5. Running App. 

Using the `redux-devtools-extension` first. 使用redux浏览器扩展插件。
Click to download the extension.
<a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">![redux-devtools](images/redux-dev.png)</a>

**Before running the app,visit this repo to get the backstage code and run the server, so you can use api.See more info https://github.com/SoloistWang/koa2-mongodb-jwt-server 运行应用之前建议下载后台代码并打开服务器，保证接口顺利运行。**

 Visit local website.
 http://localhost:3000/search

 ### test search page
![search](images/search.png)

 ### test login page
![login](images/login.png)

 ### test user page
![user](images/user.png)

 ### test star page
![star](images/star.png)


