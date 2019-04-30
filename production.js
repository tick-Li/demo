const path = require("path");
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const TerserJSPlugin = require("terser-webpack-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const production = {
    mode: 'production',
    stats: {
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash:8].js",
        chunkFilename: '[name].[chunkhash:8].js',
        publicPath: './'
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new copyWebpackPlugin([
            {
                from: path.join(__dirname, './static'),
                to: path.join(__dirname, './dist')
            }
        ]),
    ]
};

module.exports = merge(config, production);