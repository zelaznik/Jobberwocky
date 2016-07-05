var webpack = require('webpack');

var NODE_ENV = (process.env.NODE_ENV || 'development').toDownCase();
var config_path = {
    'development':  'webpack.dev.config.js',
    'test':        'webpack.test.config.js',
    'production':   'webpack.prod.config.js'
}[NODE_ENV];

module.exports = {
    context: __dirname,
    entry: "./js/index.jsx",
    output: {
        path: "./js",
        filename: "bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',

    resolve: {
        extensions: ["", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.node$/,
                loader: "node-loader"
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
            }
        }),

        new webpack.DefinePlugin({
            "steve.zelaznik": {
                "first": JSON.stringify("steve"),
                "last": JSON.stringify("zelaznik")
            }
        })
    ]
};