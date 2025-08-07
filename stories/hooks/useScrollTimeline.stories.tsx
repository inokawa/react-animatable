import { StoryObj } from "@storybook/react-vite";
import React, { useEffect } from "react";
import { useAnimation, useScrollTimeline } from "../../src";

export default { component: useScrollTimeline };

export const Document: StoryObj = {
  render: () => {
    const size = 100;
    const height = 2000;

    const animate = useAnimation(
      [{ transform: `translate(0px, ${height - size}px) rotate(3600deg)` }],
      {
        duration: 500,
        easing: "ease-in",
        timeline: useScrollTimeline(),
      }
    );
    useEffect(() => {
      animate.play();
    }, []);

    return (
      <div
        style={{
          position: "relative",
          height,
        }}
      >
        Please scroll down!
        <div
          ref={animate}
          style={{
            position: "absolute",
            background: "pink",
            height: size,
            width: size,
            top: 0,
            left: 200,
          }}
        />
      </div>
    );
  },
};

export const Overflow: StoryObj = {
  render: () => {
    const size = 100;
    const height = 2000;

    const timeline = useScrollTimeline();
    const animate = useAnimation(
      [{ transform: `translate(0px, ${height - size}px) rotate(3600deg)` }],
      {
        duration: 500,
        easing: "ease-in",
        timeline,
      }
    );
    useEffect(() => {
      animate.play();
    }, []);

    return (
      <div
        style={{
          background: "lightgray",
          padding: 100,
        }}
      >
        <div
          ref={timeline}
          style={{
            background: "white",
            overflow: "scroll",
            width: 400,
            height: 400,
          }}
        >
          <div
            style={{
              position: "relative",
              height,
            }}
          >
            Please scroll down!
            <div
              ref={animate}
              style={{
                position: "absolute",
                background: "pink",
                height: size,
                width: size,
                top: 0,
                left: 200,
              }}
            />
          </div>
        </div>
      </div>
    );
  },
};
