const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/cst3145-cw3-sfc/" : "/",
  transpileDependencies: true
})
