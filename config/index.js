const config = {
  projectName: 'taro-template',
  date: '2020-1-13',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  //多端打包不同的dist
  outputRoot: `dist/${process.env.TARO_ENV}`,
  alias: {
    api: path.resolve(__dirname, '..', 'src/webapi'),
    typings:path.resolve(__dirname, '..', 'src/typings'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/common': path.resolve(__dirname, '..', 'src/common'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/service': path.resolve(__dirname, '..', 'src/service'),
    '@/redux': path.resolve(__dirname, '..', 'src/redux'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/libs': path.resolve(__dirname, '..', 'src/libs'),
    '@/*': path.resolve(__dirname, '..', 'src/*'),
  },
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime'
        }
      ]
    ]
  },
  defineConstants: {
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function(merge) {
  return merge({}, config, require('./build'));
};
