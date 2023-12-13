// // For testing web-animations-js
// window.Animation = undefined;
// window.KeyframeEffect = undefined;
// Element.prototype.animate = undefined;
// import("web-animations-js");

/** @type { import('@storybook/react').Preview } */
export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
