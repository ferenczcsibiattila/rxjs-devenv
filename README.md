# rxjs-devenv

Playground for rxjs


```bash
$ npm install --global yarn
$ yarn global add @angular/cli
$ export PATH="$HOME/.yarn/bin:$PATH"
$ ng config -g cli.packageManager yarn
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 14.2.3
Node: 16.13.0
Package Manager: yarn 1.22.19
OS: darwin arm64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1402.3 (cli-only)
@angular-devkit/core         14.2.3 (cli-only)
@angular-devkit/schematics   14.2.3 (cli-only)
@schematics/angular          14.2.3 (cli-only)
```
## Add more dependecies, tools

```bash
$ yarn add rxjs webpack webpack-dev-server typescript ts-loader @babel/core @babel/preset-env babel-loader babel-polyfill esm

$ yarn add webpack-cli --dev
```

## Init project

```bash
❯ yarn init
yarn init v1.22.19
question name (01kod):
question version (1.0.0):
question description: RxJS kódolás 01
question entry point (index.js): src/index.ts
question repository url:
question author: Ferencz-Csibi Attila
question license (MIT):
question private:
success Saved package.json
✨  Done in 57.57s.
```

## Prepare config files

```bash
  // Add this to package.json
  ...
  "scripts": {
    "publish": "webpack && webpack-dev-server",
    "start": "webpack-dev-server --mode development"
  }
  ...
  //


## create webpack.config.js
  const path = require('path');
  module.exports = {
    entry: ['babel-polyfill', './src'],
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };


## create tsconfig.json
  {
    "compilerOptions": {
      "outDir": "./dist/",
      "noImplicitAny": true,
      "module": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "target": "es6",
      "typeRoots": [
        "node_modules/@types"
      ],
      "lib": [
        "es2017",
        "dom"
      ],
      "allowJs": true
    }
  }
```

## Run

```bash
$ yarn run start
```
