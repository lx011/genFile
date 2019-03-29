# genFile

> Generate File

## Installation

```bash
npm install @lx011/genFile --save-dev
yarn add @lx011/genFile --dev
```

## Usage

```js
const genFile = require('@lx011/genFile');

// { filename, template, path? = '', update? = false }
genFile({
  filename: 'test.txt', // filename
  template: 'test genFile', // file content(object | string)
  // path: 'test/a/b', // file path
  // update: true, // update file content
})

```

> **Tip:** \
> *Optional parameter:* `path`, `update` \
> *default value:* path = '', update = false
