const genFile = require('../dist/genfile.umd');
const test = require('ava');

test.serial('create', async t => {
  const result = await genFile({
    filename: './test/file/a.txt',
    template: 'test',
  });
  t.is(result, 'create');
});

test.serial('update', async t => {
  const result = await genFile({
    filename: './test/file/a.txt',
    template: 'test update',
    update: true,
  });
  t.is(result, 'update');
});

test.serial('exist', async t => {
  const result = await genFile({
    filename: './test/file/a.txt',
    template: 'test exist',
  });
  t.is(result, 'exist');
});

test('create mulit file', async t => {
  const result = await Promise.all([
    genFile({
      filename: './test/file/b.txt',
      template: 'test b',
    }),
    genFile({
      filename: './test/file/c.txt',
      template: 'test c',
    })
  ]);
  result.map(i => t.is(i, 'create'));
});
