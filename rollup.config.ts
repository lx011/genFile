import typescript from 'rollup-plugin-typescript2';
import camelCase from 'lodash.camelcase';
import minify from 'rollup-plugin-babel-minify';
import filesize from 'rollup-plugin-filesize';

const pkg = require('./package.json');
const libName = camelCase(pkg.name);
// console.log(pkg);

export default {
  input: 'src/index.ts',
  output: [{
    name: libName,
    file: pkg.main,
    format: 'umd',
    sourcemap: false,
  }, {
    name: libName,
    file: pkg.module,
    format: 'es',
    sourcemap: false,
  }],
  watch: {
    include: 'src/**',
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    minify({
      simplify: false,
      comments: false,
    }),
    filesize(),
  ],
}