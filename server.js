// require("babel-polyfill")
const convert = require('koa-convert')
var path = require('path')
var webpack = require('webpack')
var webpackConf = require('./webpack.config')
var Koa = require('koa')
var serve = require('koa-static')
var serve = require('koa-static')
var app = new Koa()
var compiler = webpack(webpackConf)
var publicPath = webpackConf.output.publicPath
var history = require('koa-connect-history-api-fallback')
const isProd = process.env.NODE_ENV === 'production'
var port = process.env.PORT || 3000
app.use(convert(require('koa-favicon')(path.join(__dirname, '/assets/favicon.ico'))));
if (!isProd) {
  var devMiddleware = require('koa-webpack-dev-middleware')(compiler, {
    stats: {
      colors: true,
      chunks: false
    },
    publicPath: publicPath
  })  
  app.use(convert(devMiddleware))
  app.use(convert(require('koa-webpack-hot-middleware')(compiler)))
  const fs = devMiddleware.fileSystem
  const filePath = path.join(__dirname, publicPath)
  app.use(ctx => {
    ctx.type = 'html'
    ctx.body = fs.createReadStream(path.join(filePath, 'index.html'), 'utf-8')
  })
  compiler.plugin('done', function () {
    setTimeout(function () {
      console.log('[Dev mode] : Browse to http://localhost:' + port)
    }, 1000)
  })
} else {
  console.log('[Production mode]: Browse to http://localhost:' + port)
  app.use(convert(history()))
  app.use(convert(serve(path.join(__dirname, '/dist/'))))
}

app.listen(port)
