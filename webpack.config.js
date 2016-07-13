var assign = require('object-assign');
var webpack = require('webpack');
var env = process.env;

try {
  var secrets = require('./webpack.secrets.config.js');
} catch(e) {
  secrets = {};
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
            "process.env": assign({
                "PUSHER_KEY":    JSON.stringify(env.PUSHER_KEY    ||  secrets.PUSHER_KEY),
                "NODE_ENV":      JSON.stringify(env.NODE_ENV      || "development"),
                "API_ROOT_URL":  JSON.stringify(env.API_ROOT_URL  || "http://railsapi.dev"),
                "FRONT_END_URL": JSON.stringify(env.FRONT_END_URL || "http://nodereactjs.dev")
            })
        })
    ]
};
