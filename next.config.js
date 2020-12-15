const webpack = require('webpack')
const path = require('path')
require('dotenv').config()

module.exports = {
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})
    config.plugins.push(new webpack.DefinePlugin(env))

    config.resolve.alias['~'] = path.join(__dirname, './')

    return config
  }
}
