# Webpack Sample

This is a pure Webpack sample mostly based on [this getting started tutorial](https://webpack.github.io/docs/tutorials/getting-started/).

## Running

To run the thing, you need to install a few things:

 - Webpack: `npm install webpack -g`
 - http-server: `npm install http-server -g`

Now, you can get the sample running:

```bash
npm install
webpack
http-server -o
```

You can go fancy on the `webpack` command to enable progress, color and watch:

```bash
webpack --progress --colors --watch
```

## Advantages over Gulp

Maybe not a fair and good comparison but at least it's how I see it: 

 - Declartive way of defining the build process which is easy to grasp when you look at the config file
 - Great to work with npm on browser stuff and no need for an additional tool like browserify
 - Nicely defined conventions
 - Built-in loaders makes it easy to have a off the shelf experience on most common tasks like requiring non-js assets, etc
 - Smilar to loaders, plugins hook in well
 - Great documentation and community resources around it.

## Some Loaders

 - [Sass](https://github.com/jtangelder/sass-loader)
 - [Babel](https://github.com/babel/babel-loader)
 - [Json](https://github.com/webpack/json-loader)
 - [Url](https://github.com/webpack/url-loader)
 - [Bootstrap](https://github.com/shakacode/bootstrap-loader)

## Some Plugins

 - [DefinePlugin: define variables](https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin)

## Resources

 - [Webpack Usage](https://webpack.github.io/docs/usage.html)
 - [List of Webpack Examples](https://webpack.github.io/docs/examples.html)
 - [Basic CommonJS Usage](https://github.com/webpack/webpack/tree/master/examples/commonjs)
 - [Plugins](https://webpack.github.io/docs/usage.html#using-plugins)
 - [Using Plugins](https://webpack.github.io/docs/using-plugins.html)
 - [Browserify vs Webpack](https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9#.mm20d28rj)
 - [Long-term caching of static assets with Webpack](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.3x33a1cr7)
 - [Code Splitting](https://webpack.github.io/docs/code-splitting.html)