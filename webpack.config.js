module.exports = {
    context: __dirname,
    entry: "./app.jsx",
    output: {
        path: "./js",
        filename: "bundle.js"
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
    }
};