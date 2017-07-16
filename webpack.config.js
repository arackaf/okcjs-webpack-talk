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
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["es2015", { "modules": false }], 'stage-2']
                    }
                }
            }
        ]
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