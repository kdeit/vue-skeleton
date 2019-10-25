var webpack = require('webpack'); //Common JS
const path = require('path');
const bitrixTemplateName = 'ikea';
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = { //Common JS
    entry: './src/index.js',
    output: {
        //path: path.resolve(__dirname, '../templates/'+ bitrixTemplateName),
        path: path.resolve(__dirname, 'dist'),
        filename: 'script_[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                }
            },

            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.svg2$/,
                loader: 'svg-inline-loader'
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
    ],

    //Без настроек ниже не работают vue компоненты
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, '..', 'src')
        }
    },
}