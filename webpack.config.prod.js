import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        // Use CommonPluginsChunk to create a seperate bundle
        // of vendor libraries so they're cached separately.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // Create HTML file that includes refernce to bundled JS
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),
        //eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin,
        // minify js
        new webpack.optimize.UglifyJsPlugin()

    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}