# Install

> This is a documentation to create a ready to use react application  
> with the different options specified here:

- create-react-app typescript
- Xo for eslint  
  (I also give my vscode configuration so  
  that prettier and Xo work together)
- craco for alias management
- axios
- react-router
- rxjs for store management  
  (you can use something else it won't break the installation)
- tailwindcss, daisyui
- react-toastify

> this installation will work perfectly as a whole  
> if you do not use certain things, you will certainly encounter bugs

## Install / install dependencies

1. create react app

```shell
$ npx create-react-app NAMEOFAPP --template typescript
```

2. dependencies

```shell
$ npm i axios && npm i craco && npm i daisyui && npm i react-router-dom && npm i react-toastify && npm i rxjs && npm i @types/react-router-dom && npm i -D craco-alias && npm i -D tailwindcss postcss autoprefixer

OR

$ npm i axios craco daisyui react-router-dom react-toastify rxjs @types/react-router-dom
$ npm i -D craco-alias tailwindcss postcss autoprefixer
```

## Config eslint

1. init eslint

```shell
$ npm init @eslint/config
```

> follow terminal instructions, choose react, choose typescript,  
> style guide choose Xo, eslint file must be .js,  
> continue installation with npm

2. install eslint typescript

> we need to install some more dependencies  
> because eslint CLI does not install them>

```shell
$ npm i -D eslint-config-xo-typescript eslint-config-xo-react xo
```

3. file `.eslintrc.js`

> rename this file with the extension .cjs  
> and copy / paste this code :

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['xo', 'xo-react', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    '*.json',
    '*.css',
    '.eslintrc.cjs',
    'craco.config.js',
    'postcss.config.js',
    'tailwind.config.js',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: 0,
    'capitalized-comments': 0,
    'no-unused-vars': 1,
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': [
      0,
      { selfClosing: 'props-aligned', nonEmpty: 'after-props' },
    ],
    'object-shorthand': ['error', 'always'],
  },
};
```

4. create file `.xo-config.json` in root of your project  
   and copy / paste this code

```json
{
  "space": 2,
  "rules": {
    "object-curly-spacing": ["error", "always"],
    "capitalized-comments": "off",
    "import/extensions": "off",
    "import/no-unassigned-import": "off",
    "n/file-extension-in-import": "off",
    "unicorn/filename-case": "off",
    "unicorn/prefer-module": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off"
  }
}
```

> `.xo-config.json` does not exist at the time of installation.  
> so create in one and copy paste my code.  
> I removed some rules that break problem with some react file

6. delete partial `eslintConfig` in `package.json`  
   delete this :

```json
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```

7. my setting of vscode

> configuring eslint for the project and done.  
> now here is the off topic part about my vscode config  
> for XO to work properly with our prettier. >
> you don't have to follow the eslint or vscode configuration,  
> this is personal, but I find that my configuration respects the standards  
> and works perfectly for all types of projects.

> copy / paste the code of file `eslint/setting.json`

> you have to understand that here I use XO to linter my files
> and I use prettier to format them when saving the file.

## Craco

1. create a file `craco.config.js` in root of your project  
   and copy this code:

```js
const CracoAlias = require('craco-alias');

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
```

2. create a file `tsconfig.paths.json` in root of your project  
   and copy / paste this code :

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      // add your paths

      // ! delete this is juste for example
      "@atoms/*": ["./components/atoms/*"],
      "@molecules/*": ["./components/molecules/*"],
      "@organisms/*": ["./components/organisms/*"],
      "@templates/*": ["./components/templates/*"],
      "@config-app/*": ["./config/*"],
      "@pages/*": ["./pages/*"],
      "@store/*": ["./store/*"],
      "@types-app/*": ["./types/*"]
    }
  }
}
```

3. add this to the beginning of the file `tsconfig.json`

```json
{
  "extends": "./tsconfig.paths.json"
  // .....
}
```

4. instead of the scripts of your package.json`

```json
{
  "script": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject",
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
  }
}
```

## Tailwindcss and Daisyui

1. create config tailwind

```shell
$ npx tailwindcss init -p
```

2. add this in your `index.css`

```css
/* add your uri of font */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. add this in your `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // this
  theme: {
    extend: {
      // add your custom rules
    },
  },
  plugins: [require('daisyui')],
};
```

---

> re start your vs code
> ok now your project is functional, you can work properly

_you can visit the other parts to use axios, rxjs,  
react-router with an "Atomic design" design pattern_

---
