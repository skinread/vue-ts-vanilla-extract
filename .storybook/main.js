// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require('vite');
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin');

module.exports = {
  async viteFinal(config, { envType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      plugins: [vanillaExtractPlugin()],
    });
  },
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  }
};