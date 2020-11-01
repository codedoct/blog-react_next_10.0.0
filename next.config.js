const path = require('path')
require('dotenv').config()

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
    API_VERSION: process.env.API_VERSION
  },

  webpack: config => {
    config.resolve.alias['~'] = path.join(__dirname, './')
    return config
  }
}
