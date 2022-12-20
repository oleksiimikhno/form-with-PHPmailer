const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },

    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
               miniCss.loader,
               'css-loader',
               'sass-loader',
            ]
        }],

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "PHPmailer",
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['main']
        }),
        new miniCss({
            filename: 'default.css',
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        // publicPath: '/'
    },
    optimization: {
        runtimeChunk: 'single',
    },
}