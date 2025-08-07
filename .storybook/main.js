import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
export default {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: { builder: {} },
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
