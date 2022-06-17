# react-animatable

![npm](https://img.shields.io/npm/v/react-animatable) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-animatable) [![check](https://github.com/inokawa/react-animatable/actions/workflows/check.yml/badge.svg)](https://github.com/inokawa/react-animatable/actions/workflows/check.yml) [![demo](https://github.com/inokawa/react-animatable/actions/workflows/demo.yml/badge.svg)](https://github.com/inokawa/react-animatable/actions/workflows/demo.yml)

A lightweight, performant and composable animation library for [React](https://github.com/facebook/react), powered by [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

## Features

- Performant animation driven by native [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
- [TypeScript](https://www.typescriptlang.org/) centric design for modern web application development.
- Simple and flexible APIs based on React hooks (WIP).
- [Tiny bundle size](https://bundlephobia.com/package/react-animatable).

## Demo

https://inokawa.github.io/react-animatable/

## Install

```sh
npm install react-animatable
```

### Requirements

- react >= 16.14

And in [some legacy browsers that does not support Web Animations API](https://caniuse.com/web-animation), you may need to [use polyfill](#use-polyfill).

## Usage

```tsx
import { useEffect } from "react";
import { useAnimation } from "react-animatable";

export const App = () => {
  const animate = useAnimation(
    [
      { fill: "red", fontSize: "24px" },
      { fill: "green", fontSize: "36px" },
    ],
    {
      duration: 800,
      easing: "ease-in-out",
      iterations: Infinity,
      direction: "alternate",
    }
  );

  useEffect(() => {
    animate.play();
  }, []);

  return (
    <svg width={600} height={400} viewBox="0 0 600 400">
      <g transform="translate(50, 50)">
        <text ref={animate.ref}>Hello world</text>
      </g>
    </svg>
  );
};
```

And see [examples](./stories) for more usages.

### Use polyfill

https://github.com/web-animations/web-animations-js

You can polyfill always

```js
import "web-animations-js";

ReactDOM.render(<App />);
```

or polyfill only if browser does not support Web Animations API

```js
(async () => {
  if (!("animate" in document.body)) {
    await import("web-animations-js");
  }
  ReactDOM.render(<App />);
})();
```
