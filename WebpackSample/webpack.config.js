var webpack = require('webpack');
var GitSHAPlugin = require('git-sha-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePlugins = [
    new GitSHAPlugin({shaLength: 20}), 
    new AssetsPlugin(),
    new HtmlWebpackPlugin({
        title: 'Hello Webpack',
        template: 'index.ejs', // Load a custom template (ejs by default but can be changed)
        inject: 'body' // Inject all scripts into the body (this is the default so you can skip it)
    })
];

var envBasedPlugins = process.env.NODE_ENV !== 'development' ? [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    })
] : [];

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.[chunkgitsha].js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    },
    plugins: basePlugins.concat(envBasedPlugins)
};