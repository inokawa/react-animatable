const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-storysource"],
  framework: {
    name: "@storybook/react-webpack5",
    options: { builder: { useSWC: true } },
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
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
    // for linaria
    config.module.rules.push({
      test: /\/linaria\.stories.tsx$/,
      use: [
        {
          loader: "@linaria/webpack-loader",
          options: {
            sourceMap: false,
            babelOptions: {
              presets: [
                "@babel/preset-typescript",
                "@babel/preset-react",
                "@linaria/babel-preset",
              ],
            },
          },
        },
      ],
    });
    return config;
  },
  swc: (config) => {
    return {
      ...config,
      jsc: {
        ...config.jsc,
        transform: {
          ...config.jsc?.tranform,
          react: { ...config.jsc?.tranform?.react, runtime: "automatic" },
        },
      },
    };
  },
};
