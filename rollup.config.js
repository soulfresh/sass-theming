import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from '@rollup/plugin-replace';
import commonjs from "rollup-plugin-commonjs";

import pkg from './package.json';

module.exports = {
  input: [
    './src/docs/components.js',
  ],
  output: [{
    dir: 'lib/esm',
    format: 'esm',
  }, {
    dir: 'lib/cjs',
    format: 'cjs',
  }],
  plugins: [
    babel({
      babelrc: true,
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {})
  ],
}
