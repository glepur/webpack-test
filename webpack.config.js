// config found at http://www.reddit.com/r/angularjs/comments/252z6x/what_are_best_practices_for_bundling_angularjs/
var path = require('path');
var webpack = require('webpack');
var console = require('console');

var appScriptsPath = path.join(__dirname, 'app', 'scripts');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

var publicAssetsPath = path.join(path.resolve('../app'), 'public', 'assets');
var themePath = path.join(path.resolve('../app'), 'theme');

module.exports = {
    cache: true,

    context: appScriptsPath,
    entry: {
        app: ['./app'],
        vendor: ['angular', 'angularRouter'], 
    },

    output: {
        path: path.join(path.resolve('./app/assets'), ''),
        publicPath: '/glepur/webpack-test/app/assets/',
        filename: "[name].bundle.js",
        chunkFilename: ' [name].bundle.js'
    },

    resolve: {
        modulesDirectories: ['bower_components', 'node_modules', path.join(appScriptsPath, 'controllers')],

        alias: {
            angular: 'angular/angular',
            angularRouter: 'angular-ui-router/release/angular-ui-router',
            app: path.join(appScriptsPath, 'app')
        },
        extensions: [
            '',
            '.js', '.coffee',
            '.html', '.jade',
            '.css', '.styl', '.scss', '.less'
        ]
    },
    resolveLoader: {
        root: nodeModulesPath
    },

    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        // this plugin makes webpack not only looking for package.json, but also for a bower.json with a main-field
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ]),
        new webpack.DefinePlugin({
          VERSION: JSON.stringify('alpha'),
          ASSETS_PATH: JSON.stringify(publicAssetsPath + '/'),
          DEVEL: true
        }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],

    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee" },
            { test: /\.html$/, loader: "html" },
            { test: /\.jade$/, loader: "template-html" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.styl$/, loader: "style!css!stylus" },
            { test: /\.woff$/,   loader: "url?prefix=fonts/&limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file?prefix=fonts/" },
            { test: /\.eot$/,    loader: "file?prefix=fonts/" },
            { test: /\.svg$/,    loader: "file?prefix=fonts/" }
        ]
    }

};

