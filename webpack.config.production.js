var webpack = require('webpack');
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var srcPath = path.resolve(__dirname, 'src');
var distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
      loaders: [
          {
            test: /\.less$/,
            loader: 'style!css!less',
            include: path.join(__dirname, 'css')
          },
          {
            test: /\.css$/,
            loader: 'style!css'
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
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src'),
            exclude: [nodeModulesPath]
          }
      ]
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    root: path.resolve(__dirname),
    alias: {
      css : 'css'
    },
    extensions: ['', '.js', '.less']
  }
};
