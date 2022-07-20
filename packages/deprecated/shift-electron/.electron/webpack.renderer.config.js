const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const plugins = require('./webpack.plugins')
const rules = require('./webpack.rules')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    plugins: [new TsconfigPathsPlugin()]
  },
  devtool: 'source-map',
}
