const merge = require('webpack-merge')
const sharedConfig = require('./shared.config')

// plugins
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(sharedConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [new CompressionPlugin()],
})
