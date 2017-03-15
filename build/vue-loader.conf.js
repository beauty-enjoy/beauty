var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var isServer = process.env.VUE_ENV === 'server'
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction && !isServer
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction && !isServer
  })
}
