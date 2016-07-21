var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
        { from: 'data.json', to: 'data.json' }
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src') },
      { test: /(\.css)$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/[name].[hash].[ext]' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/[name].[hash].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=assets/[name].[hash].[ext]' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=assets/[name].[hash].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=assets/[name].[hash].[ext]' },
      { test: /\.(jpg|png|jpeg)$/, loader: 'file?name=assets/images/[name].[hash].[ext]' }
    ]
  }
};