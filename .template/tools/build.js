var webpack = require('webpack');
var webpackConfig = require('../webpack.config.prod');
var colors = require('colors');

process.env.NODE_ENV = 'production'; // this assures the Babel dev config (for hot reloading) doesn't apply.

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run(function (err, stats) {
    if (err) { // so a fatal error occurred. Stop here.
        console.log(err.bold.red);
        return 1;
    }

    var jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(function (error) {
            console.log(error.red);
        });
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(function (warning) {
            console.log(warning.yellow);
        });
    }

    console.log(`Webpack stats: ${stats}`);

    console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);

    return 0;
});