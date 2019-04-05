const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS()