var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: isProd ? '/' : '/dist/',
    filename: 'build.[hash].js'
  },
  module: {
    
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        exclude: /node_modules/,
        options: {
        //   formatter: require('eslint-friendly-formatter'),
          fix : true,
        }
      },
      {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {                      
          stylus: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!stylus-loader' }),
          scss: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader' }),
          sass: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader?indentedSyntax' })
        }
                    // other vue-loader options go here
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }
    ]
  },  
  devServer: {
    progress: true,
    historyApiFallback: false,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new ExtractTextPlugin('styles.[hash].css'),    
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devtool: '#source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
        // http://vue-loaginder.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
