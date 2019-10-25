const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');




// the path(s) that should be cleaned
let pathsToClean = [
    'img','tmp','svg'
];

let pathToCopy = [
    { from: 'src/static/img', to: 'img' },
    { from: 'src/static/tmp', to: 'tmp' },
    { from: 'src/static/svg', to: 'svg' },
    //{ from: 'src/static/web-font.css', to: 'web-font.css' }
];

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name]_[hash].css',
            chunkFilename: "[id]_[hash].css"
        }),
        new OptimizeCSSAssetsPlugin({}),
        new CopyWebpackPlugin(pathToCopy)
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
})