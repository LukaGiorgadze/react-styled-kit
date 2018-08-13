# React Styled-Components Kit
## React Starter kit, with styled-components, storybook, redux, saga, husky, prettier, tests and more...

### Features
* Full ES6
* Webpack 4 with minimum configuration, you have webpack.common.js with webpack.dev.js & webpack.prod.js;
* You are no longer styling HTML elements or components based on their class or HTML element - [Styled-Components](https://www.styled-components.com/);
* The UI development environment with [Storybook](https://storybook.js.org/) 
* Test with jest;
* Code Analyzer;
* Automatic code prettier before commit (on `git add .`);
* Redux & Redux-Saga;
* & Much more...

### Installation
1. Install [Node.js 10](https://nodejs.org/en/download/current/) & [Python](https://www.python.org/downloads/)
2. `git clone https://github.com/LukaGiorgadze/react-styled-kit.git`
3. `cd ./scfrontend` (cloned directory)
4. `npm install`
5. `npm start`

### NPM Commands
* `npm test` - Run all tests
* `npm run test:watch` - Run all tests with watch
* `npm start` - Start the project
* `npm build` - Build production code
* `npm analyze` - Analyze code
* `npm pretty` - Pretty your ugly code
* `npm storybook` - UI component environment

### Docs
* [Overview](#overview)
* [Basic configuration](#basic-configuration)
* [Files and Directories](#files-and-directories)
* [UI Components](#ui-components)
* [Storybook for UI Components](#storybook-for-ui-components)
* [Testing](#testing)
* [React Components (Layouts and Views)](#react-components)
* [Redux and Redux-Saga](#redux-and-redux-saga)
* [Code Analyze and Pretty](#code-analyze-and-pretty)


#### Overview
This application is based on **react & redux**, only front-end. So, if you want some backend services on your server, or something else,
you have to setup **express** server and **webpack-dev-middleware** and uninstall **webpack-dev-server**.

#### Basic configuration
In **webpack.common.js** file, you can change main entry file, for example, default entry is index.jsx,
you can change it from: `module.exports = { entry: "index.jsx"...`,
output bundle from output: ` module.exports = { ... { filename: "bundle.js" }...`
You can also configure webpack for development in **webpack.dev.js** and for production **webpack.prod.js**

#### Files and Directories
* **actions** - Redux actions
* **components** - React components/layouts/views
* **reducers** - Redux reducers
* **sagas** - Redux Sagas
* **ui** - UI Components

All test and stories files are located in folder of component, for example:

* /ui/elements/button/
    * index.jsx
    * index.test.jsx
    * index.stories.jsx


We have aliases for shorten directory (component/file) access, for example, if you want to import something from
./ui/ folder to components file, you had something like this:
`import { Button } from "../../ui/elements/button/index";`
with aliases, you need to specify only root folder: `import { Button } from "ui/elements/button/index";` all aliases:
* `'public/...'`
* `'components/...'`
* `'ui/...'`
* `'actions/...'`
* `'reducers/...'`
* `'sagas/...'`


#### UI Components
#### Storybook for UI Components
#### Testing
#### React Components
#### Redux and Redux-Saga
#### Code Analyze and Pretty