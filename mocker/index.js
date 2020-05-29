const delay = require('mocker-api/utils/delay'); // 延迟请求

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  // Priority processing.
  _proxy: {
    proxy: {
      '/repos/(.*)': 'https://api.github.com/',
      // '/repos/jaywcjlove/webpack-api-mocker': 'https://api.github.com/repos/jaywcjlove/webpack-api-mocker',
    },
    changeHost: true,
  },
};
module.exports = noProxy ? {} : delay(proxy, 1000);
