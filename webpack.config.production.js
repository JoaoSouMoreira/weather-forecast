var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
      loaders: [
          {
            test: /\.less$/,
            loader: 'style!css!less'
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
    extensions: ['', '.js']
  }
};
