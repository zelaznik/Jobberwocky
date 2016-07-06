var webpack = require('webpack');

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
                "NODE_ENV":     JSON.stringify(env.NODE_ENV     || "development"),
                "API_ROOT_URL": JSON.stringify(env.API_ROOT_URL || "http://localhost:3000")
            }
        })
    ]
};