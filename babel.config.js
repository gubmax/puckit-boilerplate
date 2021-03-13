module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', {
        corejs: false,
        helpers: true,
        regenerator: true,
      }],
      ['@emotion', {
        labelFormat: '[dirname]--[local]',
      }],
    ],
  };
};
