module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    port: 8080,
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
      .options({

      })
      .end();
  },
};
