import { StoryObj } from "@storybook/react-vite";
import React from "react";
import { MantineProvider, Button } from "@mantine/core";
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
      <MantineProvider>
        <Button
          ref={animate}
          onClick={() => {
            animate.play();
          }}
        >
          Click Me!
        </Button>
      </MantineProvider>
    );
  },
};
