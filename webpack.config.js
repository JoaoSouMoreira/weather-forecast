var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var srcPath = path.resolve(__dirname, 'src');
var distPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: ['babel-polyfill', 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', './src/app.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: 'style!css'
            },
            {
              test: /\.less$/,
              loader: 'style!css!less'
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            },
            {
              test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
              loader: 'url-loader?limit=100000'
            },
            {
              test: srcPath,
              loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
              include: path.join(__dirname, 'src'),
              exclude: [nodeModulesPath]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
      extensions: ['', '.js']
    }
};
