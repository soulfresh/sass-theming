import resolve from '@rollup/plugin-node-resolve';

module.exports = {
  input: [
    './components.js',
  ],
  output: [{
    dir: 'lib/esm',
    format: 'esm',
  }, {
    dir: 'lib/cjs',
    format: 'cjs',
  }],
  plugins: [resolve()],
}
