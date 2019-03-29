# genFile

> Generate File

## Installation

```bash
npm install genfile --save-dev
yarn add genfile --dev
```

## Usage

```js
const genFile = require('genfile');

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
