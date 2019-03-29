# genFile

> Generate File

## Installation

```bash
npm install @lx011/genfile --save-dev
yarn add @lx011/genfile --dev
```

## Usage

```js
const genFile = require('@lx011/genfile');

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
