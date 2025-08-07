import { StoryObj } from "@storybook/react-webpack5";
import React from "react";
import { PrimaryButton } from "@fluentui/react";
import { useAnimation } from "../../../src";

export default { component: useAnimation };

export const Default: StoryObj = {
  render: () => {
    const animate = useAnimation(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(720deg)" }],
      {
        duration: 1000,
        easing: "ease-in-out",
      }
    );

    return (
      <PrimaryButton
        elementRef={animate}
        onClick={() => {
          animate.play();
        }}
      >
        Click Me!
      </PrimaryButton>
    );
  },
};
