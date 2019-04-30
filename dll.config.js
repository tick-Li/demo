const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-router",
            "react-router-dom",
        ]
    },
    output: {
        path: path.resolve(__dirname, './static'),
        filename: 'dll.[name].js',
        library: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: "babel-loader",
                include: path.resolve(__dirname, 'src')
            },
            { test: /\.ts$/, use: 'ts-loader' },
            { 
                test: /\.(css|less)$/, use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            path: '[name]-manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
}