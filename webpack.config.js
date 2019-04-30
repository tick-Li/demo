const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const config = {
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            name: 'split',
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },
    entry: {
        polyfill: "babel-polyfill",
        main: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash:8].js",
        chunkFilename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, "src"),
                use: "babel-loader",
            },
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            { 
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[hash:8].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:8].css",
            chunkFilename: "css/[name].[hash:8].css"
        }),
        new HtmlWebpackPlugin({ 
            template:  path.resolve(__dirname, 'src/index.html')
        }),
        new AddAssetHtmlPlugin([{
            filepath: path.resolve(__dirname, 'static/dll.vendor.js')
        }]),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.resolve(__dirname, './vendor-manifest.json')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            views: path.resolve(__dirname, 'src/views'),
            routers: path.resolve(__dirname, 'src/routers'),
            images: path.resolve(__dirname, 'src/images'),
        }
    }
}

module.exports = config;