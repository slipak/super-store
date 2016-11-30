var path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    entry: path.resolve(__dirname + '/src'),
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.s?css$/,
                loader: 'style!css!sass'
            },
            {
                test   : /\.woff/,
                loader : require.resolve("url-loader") + '?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]'
            },
            {
                test   : /\.ttf/,
                loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test   : /\.eot/,
                loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test   : /\.svg/,
                loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
            }
        ]
    },
    devServer: {
        port: 3200,
        contentBase: path.resolve(__dirname + '/src')
    }
};