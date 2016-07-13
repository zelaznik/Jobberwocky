var webpack = require('webpack');
var env = process.env;

try {
  var secrets = require('./webpack.secrets.config.js');
} catch(e) {
  secrets = {};
}

function config(name, alt) {
    return JSON.stringify(env[name] || secrets[name] || alt || '');
}

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
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.node$/,
                loader: "node-loader"
            }
        ]
    },

    sassLoader: {
        includePaths: [__dirname + "/assets/css"]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "PUSHER_KEY":    config("PUSHER_KEY"),
                "NODE_ENV":      config("NODE_ENV"),
                "API_ROOT_URL":  config("API_ROOT_URL"),
                "FRONT_END_URL": config("FRONT_END_URL")
            }
        })
    ]
};
