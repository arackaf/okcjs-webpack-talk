const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name]-bundle.js',
        chunkFilename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [["es2015", { "modules": false }], 'stage-2']
            }
        }]
    },
    plugins: [
        //new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app',
            async: 'shared-stuff',
            minChunks: 2
        })
    ]
}