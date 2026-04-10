// @ts-nocheck - babel config, no type checking needed
module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
  };
};
