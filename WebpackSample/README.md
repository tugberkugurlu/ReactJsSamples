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