const moonConfig = require('../.moon.json');
const config = require('./.config.json');

const __TARO_ENV = JSON.stringify(process.env.TARO_ENV);
const __HOST_EN =  process.env.HOST_ENV;

module.exports = {
  env: {
    NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
  },
  defineConstants: {
    //是否为开发模式
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    //终端类型
    __TARO_ENV,
    //地址配置
    __Config__: JSON.stringify({
      host: config[__HOST_EN]["host"],
      magicHost: config[__HOST_EN]["magicHost"],
      renderHost:config[__HOST_EN]["renderHost"],
    }),
    //mock配置
    __ApiMock__: JSON.stringify(moonConfig.api.mock.mockApi),
  },
  weapp: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
};
