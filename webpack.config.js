const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const {
  name,
  version,
  repository,
  author,
  license
} = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';

const libraryName = 'js-library-boilerplate';

const banner = `
  ${name} v${version}
  ${repository.url}
  Copyright (c) ${author.replace(/ *\<[^)]*\> */g, ' ')}
  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    [libraryName]: path.resolve(__dirname, 'src/index.js'),
    [`${libraryName}.min`]: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: libraryName,
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.BannerPlugin(banner)
  ],
  resolve: {
    extensions: ['.json', '.js']
  }
};
