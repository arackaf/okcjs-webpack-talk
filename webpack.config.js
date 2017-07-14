const path = require('path');
const webpack = require('webpack');

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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            async: 'shared-stuff',
            minChunks: (module, count) => {console.log(count); return count >= 2 },
            //minSize: 1,
        })
    ]
}