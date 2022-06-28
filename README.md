# react-animatable

![npm](https://img.shields.io/npm/v/react-animatable) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-animatable) [![check](https://github.com/inokawa/react-animatable/actions/workflows/check.yml/badge.svg)](https://github.com/inokawa/react-animatable/actions/workflows/check.yml) [![demo](https://github.com/inokawa/react-animatable/actions/workflows/demo.yml/badge.svg)](https://github.com/inokawa/react-animatable/actions/workflows/demo.yml)

A small but powerful animation library for [React](https://github.com/facebook/react), built on [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

<img src="./demo.gif" width="600px" />

## Features

- Performant animation driven by native [Web Animations API (WAAPI)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), but with minimal stress integrating it to React.
- HTML, SVG, Canvas and other things can be animated.
- [TypeScript](https://www.typescriptlang.org/) centric design for modern web application development.
- Composable and declarative APIs based on React hooks.
- [Tiny bundle size (currently about 2kB gzipped)](https://bundlephobia.com/package/react-animatable) and has zero dependencies.

## Demo

https://inokawa.github.io/react-animatable/

## Install

```sh
npm install react-animatable
```

### Requirements

- react >= 16.14

And in some legacy browsers that does not support Web Animations API, [you may need to use polyfill](#use-polyfill).

## Usage

The hooks accepts [canonical keyframe format objects](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#syntax) and [KeyframeEffect's options](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) as arguments, so check them before using this library.

```tsx
import { useEffect } from "react";
import { useAnimation } from "react-animatable";

export const App = () => {
  // Define your animation in WAAPI way
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
    // And play it!
    animate.play();
  }, []);

  return (
    <svg
      width={600}
      height={400}
      viewBox="0 0 600 400"
      onClick={
        // The return value of useAnimation and its methods are memoized
        animate.pause
      }
    >
      <g transform="translate(50, 50)">
        <text
          ref={
            // You have to pass ref to element you want to control
            animate.ref
          }
        >
          Hello world
        </text>
      </g>
    </svg>
  );
};
```

## API

### useAnimation

A basic hook to use Web Animations API.

[Examples](./stories/hooks/useAnimation.stories.tsx)

### useAnimationController

A hook to compose multiple [useAnimation](#useanimation) and orchestrate their animations.

[Examples](./stories/hooks/useAnimationController.stories.tsx)

### useAnimationFunction

Same as [useAnimation](#useanimation), but it drives function not React element.

[Examples](./stories/hooks/useAnimationFunction.stories.tsx)

### useTransitionAnimation

A hook to compose multiple [useAnimation](#useanimation) and plays them when element enter/update/exits.
This hook must be used under [AnimationGroup component](#animationgroup).

[Examples](./stories/hooks/useTransitionAnimation.stories.tsx)

### AnimationGroup

A component to provide some behavior to its children.
Currently it only detects enter/update/exit of children by key, that works similar to [TransitionGroup of react-transition-group](https://reactcommunity.org/react-transition-group/transition-group).

## Use polyfill

1. [browsers that have KeyframeEffect](https://caniuse.com/mdn-api_keyframeeffect)
1. [browsers that have Element.animate()](https://caniuse.com/mdn-api_element_animate)
1. browsers that have no Web Animations APIs

In 1, you can use all functions of this library without polyfill. Some of the newer features like [composite mode](https://caniuse.com/web-animation) and [CSS Motion Path](https://caniuse.com/css-motion-paths) may be ignored in some browsers though.

In 2, you can use this library but `useAnimationFuction` would not work.

In 3, you have to setup [Web Animations API polyfill](https://github.com/web-animations/web-animations-js) to use this library.

### Setup web-animations-js

```sh
npm install web-animations-js
```

```js
// You can polyfill always
import "web-animations-js";
ReactDOM.render(<App />);

// or polyfill only if browser does not support Web Animations API
(async () => {
  if (!("animate" in document.body)) {
    await import("web-animations-js");
  }
  ReactDOM.render(<App />);
})();
```

#### `Partial keyframes are not supported` error was thrown

web-animations-js does not support partial keyframes, so you have to write animation definitions like below.

https://github.com/PolymerElements/paper-ripple/issues/28#issuecomment-266945027

```jsx
// valid
const animate = useAnimation(
  [
    { transform: "translate3d(0px, 0, 0)" },
    { transform: "translate3d(400px, 0, 0)" },
  ],
  { duration: 800, easing: "ease-in-out" }
);
// invalid
const animate = useAnimation(
  { transform: "translate3d(400px, 0, 0)" },
  { duration: 800, easing: "ease-in-out" }
);

// valid
const animate = useAnimation(
  [
    { transform: "translateX(0px)", fill: "blue" },
    { transform: "translateX(100px)", fill: "red" },
    { transform: "translateX(0px)", fill: "blue" },
  ],
  { duration: 800, easing: "ease-in-out" }
);
// invalid
const animate = useAnimation(
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(100px)", fill: "red" },
    { fill: "blue" },
  ],
  { duration: 800, easing: "ease-in-out" }
);
```

## My previous experiments (deprecated)

- [tweened](https://github.com/inokawa/tweened)
- [react-use-d3](https://github.com/inokawa/react-use-d3)
