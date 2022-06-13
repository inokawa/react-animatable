import { StoryObj } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { useAnimation } from "../src";

export default { component: useAnimation };

export const Hello: StoryObj = {
  render: () => {
    const DURATION = 2000;

    const animate = useAnimation(
      [
        { transform: "translateX(-300px)" },
        {
          transform: "rotate(360deg)",
          fill: "red",
          fontSize: "36px",
          offset: 0.75,
        },
        { transform: "rotate(0deg)" },
      ],
      { duration: DURATION, easing: "ease-in-out" }
    );

    useEffect(() => {
      animate.play();
    }, []);

    return (
      <div>
        <svg width={600} height={300} viewBox="0 0 600 300">
          <g transform="translate(100, 100)">
            <animate.text fontSize="24px" fill="lightblue">
              Hello world
            </animate.text>
          </g>
        </svg>
        <div>
          <button
            onClick={() => {
              animate.play();
            }}
          >
            play
          </button>
          <button
            onClick={() => {
              animate.pause();
            }}
          >
            pause
          </button>
          <button
            onClick={() => {
              animate.reverse();
            }}
          >
            reverse
          </button>
          <button
            onClick={() => {
              animate.finish();
            }}
          >
            finish
          </button>
          <input
            type="range"
            defaultValue="0"
            min={0}
            max={DURATION}
            onChange={(e) => {
              animate.setTime(Number(e.target.value));
            }}
          />
        </div>
      </div>
    );
  },
};

export const Toggle: StoryObj = {
  render: () => {
    const animate = useAnimation(
      { transform: "translate3d(400px, 0, 0)" },
      { duration: 800, easing: "ease-in-out" }
    );

    useEffect(() => {
      animate.play();
    }, [animate]);

    const onClick = useCallback(() => {
      animate.reverse();
    }, [animate]);

    return (
      <div>
        <button onMouseDown={onClick} onTouchStart={onClick}>
          Toggle
        </button>
        <div className="rail">
          <animate.div className="block" />
        </div>
        <style>
          {`
.rail {
  border-radius: 4px;
  background-color: rgb(240, 240, 232);
  position: relative;
  margin: 5px 3px 10px;
  width: 450px;
  height: 50px;
}
.block {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: rgb(130, 181, 198);
}
`}
        </style>
      </div>
    );
  },
};

export const Path: StoryObj = {
  render: () => {
    const animate = useAnimation(
      [
        { d: "path('M50,50L150,50L150,150L50,150z')" },
        { d: "path('M100,30L170,170L30,170L30,170z')" },
      ],
      {
        duration: 1000,
        easing: "ease-in-out",
        iterations: Infinity,
        direction: "alternate",
      }
    );

    useEffect(() => {
      animate.play();
    }, []);

    const width = 400;
    const height = 300;

    return (
      <>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <animate.path fill="orange" />
        </svg>
      </>
    );
  },
};
