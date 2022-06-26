const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "/",
  filenameHashing: true,
  productionSourceMap: false,
  devServer: {
    port: 80,
  },
})
