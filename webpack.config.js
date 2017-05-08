var path = require('path');
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
  devtool: 'source-map',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './app/client/index.js'
  ],
  output:{
    filename: 'bundle.js',
    path:path.join(__dirname, '/static/dist'),
    publicPath: '/asset/'
  },
  module:{
    loaders:[
      {
        test:/\.js$/, loader:'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets": ["es2015", "react", "stage-0", "react-hmre"],
          cacheDirectory: true,
          plugins: ["transform-runtime"]
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader', //'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
          'postcss-loader'
        ]
      },
      {test:/\.(png|jpg|jpeg|gif|webp)$/i, loader: 'url-loader?limit=10000&name=[name].[ext]'}
    ]
  },
  resolve:{
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new ExtractTextPlugin("style.css")
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(env)
    // })
  ]
}
