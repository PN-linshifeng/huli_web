const path = require('path');
// const apiMocker = require('webpack-api-mocker');
const apiMocker = require('mocker-api');

module.exports = {
  chainWebpack(config) {
    config
      .entry('main')
      .add('babel-polyfill')
      .add('classlist-polyfill');
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '192.168.1.103',
    port: 8000,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before(app) {
      // apiMocker(app, path.resolve('./mocker/index.js'), {});
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        // prependData: `@import "@/assets/scss/style.scss";`,
        prependData: `@import "@/assets/scss/_theme.scss";`,
      },
    },
  },
};
