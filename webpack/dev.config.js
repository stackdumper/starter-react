const merge = require('webpack-merge')
const sharedConfig = require('./shared.config')

module.exports = merge(sharedConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
})
