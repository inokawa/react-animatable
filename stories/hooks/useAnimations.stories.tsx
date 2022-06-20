import { StoryObj } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { useAnimations } from "../../src";

export default { component: useAnimations };

export const Countdown: StoryObj = {
  render: () => {
    const [count, setCount] = useState(10);
    const animate = useAnimations({
      count: [
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
        },
      ],
      boom: [
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
        },
      ],
    });

    useEffect(() => {
      animate.play("count");
      let startCount = count;

      const id = setInterval(() => {
        startCount -= 1;
        setCount((p) => p - 1);

        if (startCount > 0) {
          animate.setPlaybackRate((prev) => Math.min(prev * 1.15, 6));
        } else {
          clearInterval(id);
          animate.play("boom");
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
          ref={animate.ref}
          style={{ color: "white", fontSize: 64, fontWeight: "bold" }}
        >
          {count}
        </span>
      </div>
    );
  },
};

export const Sequence: StoryObj = {
  render: () => {
    const animate = useAnimations({
      red: [{ fill: "red" }, { duration: 600, easing: "ease-out" }],
      blue: [{ fill: "blue" }, { duration: 600, easing: "ease-out" }],
      green: [{ fill: "green" }, { duration: 600, easing: "ease-out" }],
    });

    const onClickRed = useCallback(async () => {
      await animate.end();
      animate.commit();
      animate.play("red");
    }, []);
    const onClickBlue = useCallback(async () => {
      await animate.end();
      animate.commit();
      animate.play("blue");
    }, []);
    const onClickGreen = useCallback(async () => {
      await animate.end();
      animate.commit();
      animate.play("green");
    }, []);
    const onClickAll = useCallback(async () => {
      await onClickRed();
      await onClickBlue();
      await onClickGreen();
    }, []);

    useEffect(() => {
      onClickAll();
    }, []);

    return (
      <div>
        <svg width={150} height={150}>
          <path
            ref={animate.ref}
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
