var webpack = require('webpack');
var path = require('path');

// Config without module dependencies
module.exports = {
    entry: {
        "app": "./src/scroller.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist",
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
