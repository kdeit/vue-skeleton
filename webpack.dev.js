const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "src/static"),
        clientLogLevel: 'warning',
        overlay: {
            warnings: true,
            errors: true
        },
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/html/index.html',
                filename: 'index.html'

            }
        )
    ]
});