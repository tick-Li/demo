const path = require("path");
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const PORT = 3002; 

const development = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: [
            path.join(__dirname, "./dist"),
            path.join(__dirname, "./static"),
        ],
        port: PORT,
        noInfo: true,
        disableHostCheck: true
    }
};

module.exports = merge(config, development);