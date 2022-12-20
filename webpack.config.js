const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
        static: './dist',
        port: 8080,
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
            filename: './style/default.css',
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/controller', to: 'controller' }
            ],
        })
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