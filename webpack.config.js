const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './lib/index.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
          /tests/
        ] 
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'commonjs',
    globalObject: 'this',
  },
  plugins: [
    new NodePolyfillPlugin(),
    new CopyPlugin({
        patterns: [
          { from: "swagger-ui", to: "swagger-ui" }
        ],
      }),
  ],
  // in order to ignore all modules in node_modules folder 
  externals: [nodeExternals()],
};