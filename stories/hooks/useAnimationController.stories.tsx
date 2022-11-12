import { StoryObj } from "@storybook/react";
import React, { useCallback, useEffect, useState } from "react";
import {
  AnimationOptions,
  useAnimation,
  useAnimationController,
} from "../../src";

export default { component: useAnimationController };

const WavedRect = ({ i }: { i: number }) => {
  const baseTiming: AnimationOptions = {
    easing: "ease-in-out",
    iterations: Infinity,
    direction: "alternate",
    delay: i * 98,
  };
  const move = useAnimation(
    [
      { transform: "translateY(0) scaleX(.8)" },
      { transform: "translateY(95vh) scaleX(1)" },
    ],
    { ...baseTiming, duration: 2500 }
  );
  const opacity = useAnimation([{ opacity: 1 }, { opacity: 0 }], {
    ...baseTiming,
    duration: 2000,
  });
  const color = useAnimation(
    [{ backgroundColor: "rgb(239, 239, 255)" }, { backgroundColor: "#e4c349" }],
    { ...baseTiming, duration: 3000 }
  );
  const animate = useAnimationController({ move, opacity, color });

  useEffect(() => {
    animate.playAll();
  }, []);

  return (
    <div
      ref={animate}
      style={{
        width: "5vw",
        height: "2.5vh",
        background: "#efefff",
        borderRadius: "1vh",
      }}
    />
  );
};

export const Wave: StoryObj = {
  render: () => {
    const [rects] = useState(() => Array.from({ length: 20 }).map((_, i) => i));

    return (
      <div
        style={{
          background: "#e45349",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {rects.map((i) => (
          <WavedRect key={i} i={i} />
        ))}
      </div>
    );
  },
};

export const Countdown: StoryObj = {
  render: () => {
    const [count, setCount] = useState(10);
    const animate = useAnimationController({
      count: useAnimation(
        [
          { opacity: 1, transform: "scale(.6)" },
          { opacity: 0.5, transform: "scale(1)" },
        ],
        {
          duration: 500,
          easing: "linear",
          delay: 0,
          iterations: 1000,
          direction: "alternate",
        }
      ),
      boom: useAnimation(
        [
          {
            opacity: 0,
            transform: "scale(.01) rotate(-10deg)",
            color: "white",
            offset: 0,
          },
          {
            opacity: 1,
            transform: "scale(1.8) rotate(7deg)",
            color: "orange",
            offset: 0.8,
          },
          {
            opacity: 1,
            transform: "scale(1) rotate(0deg)",
            color: "white",
            offset: 1,
          },
        ],
        {
          duration: 2000,
          easing: "ease-out",
          delay: 0,
          iterations: 1,
        }
      ),
    });

    useEffect(() => {
      animate.get("count").play();
      let startCount = count;

      const id = setInterval(() => {
        startCount -= 1;
        setCount((p) => p - 1);

        if (startCount > 0) {
          animate
            .get("count")
            .setPlaybackRate((prev) => Math.min(prev * 1.15, 6));
        } else {
          clearInterval(id);
          animate.get("boom").play();
        }
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }, []);
    return (
      <div
        style={{
          background: "gray",
          width: 400,
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          ref={animate}
          style={{ color: "white", fontSize: 64, fontWeight: "bold" }}
        >
          {count}
        </span>
      </div>
    );
  },
};

const Block = ({ i, length: n }: { i: number; length: number }) => {
  const timing: AnimationOptions = {
    duration: 250,
  };
  const one = useAnimation(
    [{ backgroundColor: "#eee" }, { backgroundColor: "steelblue" }],
    { ...timing, endDelay: 1000 }
  );
  const two = useAnimation(
    [{ backgroundColor: "steelblue" }, { backgroundColor: "orange" }],
    { ...timing, endDelay: 1000 }
  );
  const three = useAnimation(
    [{ backgroundColor: "orange" }, { backgroundColor: "#eee" }],
    { ...timing, endDelay: n }
  );
  const animate = useAnimationController({ one, two, three });

  useEffect(() => {
    const run = async () => {
      try {
        animate.cancelAll();
        (await animate.get("one").play().end()).cancel();
        (await animate.get("two").play().end()).cancel();
        await animate.get("three").play().end();
        run();
      } catch (e) {
        // ignore uncaught promise error
      }
    };
    setTimeout(run, i + (Math.random() * n) / 4);
  }, []);

  return (
    <div
      ref={animate}
      style={{
        width: 10,
        height: 10,
        margin: " 1px 0 0 1px",
        float: "left",
        background: "#eee",
        display: "inline-block",
      }}
    />
  );
};

export const Chained: StoryObj = {
  render: () => {
    const length = 4002;
    return (
      <div style={{ maxWidth: 960 }}>
        {Array.from({ length: length }).map((_, i) => (
          <Block key={i} i={i} length={length} />
        ))}
      </div>
    );
  },
};

export const Sequence: StoryObj = {
  render: () => {
    const timing: AnimationOptions = { duration: 600, easing: "ease-out" };
    const red = useAnimation({ fill: "red" }, timing);
    const blue = useAnimation({ fill: "blue" }, timing);
    const green = useAnimation({ fill: "green" }, timing);
    const animate = useAnimationController({ red, blue, green });

    const onClickRed = useCallback(async () => {
      const handle = animate.get("red");
      try {
        await handle.play().end();
      } finally {
        handle.persist();
      }
    }, []);
    const onClickBlue = useCallback(async () => {
      const handle = animate.get("blue");
      try {
        await handle.play().end();
      } finally {
        handle.persist();
      }
    }, []);
    const onClickGreen = useCallback(async () => {
      const handle = animate.get("green");
      try {
        await handle.play().end();
      } finally {
        handle.persist();
      }
    }, []);
    const onClickAll = useCallback(async () => {
      try {
        await onClickRed();
        await onClickBlue();
        await onClickGreen();
      } catch (e) {
        // ignore uncaught promise error
      }
    }, []);

    useEffect(() => {
      onClickAll();
    }, []);

    return (
      <div>
        <svg width={150} height={150}>
          <path
            ref={animate}
            d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
          />
        </svg>
        <div>
          <button onClick={onClickRed}>Red</button>
          <button onClick={onClickBlue}>Blue</button>
          <button onClick={onClickGreen}>Green</button>
          <button onClick={onClickAll}>All</button>
        </div>
      </div>
    );
  },
};
