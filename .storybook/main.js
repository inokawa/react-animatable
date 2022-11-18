const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // for vanilla-extract
    config.plugins.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin());
    config.module.rules.push({
      test: /\.vanilla-extract\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            url: false,
          },
        },
      ],
    });
    // for compiled
    config.module.rules.push({
      test: /\/compiled\.stories.tsx$/,
      use: [
        {
          loader: "@compiled/webpack-loader",
          options: {
            parserBabelPlugins: ["jsx", "typescript"],
            importReact: false,
          },
        },
      ],
    });
    return config;
  },
};
