const path = require('path');

const isMobileApp = !(
  process.env.PROJECT === 'PROJECT1' || process.env.PROJECT === 'PROJECT2'
);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: [path.resolve('./')],
        extensions: ['.tsx', '.jsx', '.js', '.json', '.svg'],
        alias: {
          '@f': './project/project',
          '@mobile': './project/mobile',
          '@service': './service',
          '@asset': './asset',
          '@utils': './utils',
          ...(isMobileApp
            ? { '@envFile': './utils/env.util.rn' }
            : { '@envFile': './utils/env.util' }),
          '@config': './config',
        },
      },
    ],
    ['transform-inline-environment-variables'],
    ...(isMobileApp
      ? [
          [
            'babel-plugin-inline-import',
            {
              extensions: ['.svg'],
            },
          ],
        ]
      : []),
    ['react-native-reanimated/plugin'],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
