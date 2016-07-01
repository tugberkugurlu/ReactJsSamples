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

## Resources

 - [Webpack Usage](https://webpack.github.io/docs/usage.html)
 - [List of Webpack Examples](https://webpack.github.io/docs/examples.html)
 - [Basic CommonJS Usage](https://github.com/webpack/webpack/tree/master/examples/commonjs)
 - [Plugins](https://webpack.github.io/docs/usage.html#using-plugins)
 - [Using Plugins](https://webpack.github.io/docs/using-plugins.html)