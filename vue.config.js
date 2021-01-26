module.exports = {
  publicPath: process.env.BASE_URL,
  lintOnSave: false,
  devServer: {
    open: true,
    port: 8080,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/variables.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-md-loader')
      .loader('vue-md-loader')
      .options({})
      .end();
  },
};
