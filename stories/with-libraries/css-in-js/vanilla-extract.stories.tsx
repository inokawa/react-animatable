import { StoryObj } from "@storybook/react-vite";
import React, { useEffect } from "react";
import { useAnimation } from "../../../src";
import { myStyle } from "./vanilla-extract.css";

export default { component: useAnimation };

export const Default: StoryObj = {
  render: () => {
    const animate = useAnimation(
      [
        { transform: "rotate(0deg)", borderRadius: "1rem" },
        { transform: "rotate(360deg)", borderRadius: "50%" },
        { transform: "rotate(720deg)", borderRadius: "1rem" },
      ],
      {
        duration: 1000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );

    useEffect(() => {
      animate.play();
    }, []);

    return (
      <div
        ref={animate}
        className={myStyle}
        onMouseEnter={() => {
          animate.pause();
        }}
        onMouseLeave={() => {
          animate.play();
        }}
      />
    );
  },
};
