import { StoryObj } from "@storybook/react-vite";
import React, { useEffect } from "react";
import { useAnimation } from "../../../src";
import styled from "styled-components";

export default { component: useAnimation };

const Comp = styled.div`
  border: solid 0.1rem #135569;
  height: 6rem;
  width: 6rem;
  margin: 2rem 0 2rem 2rem;
`;

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
      <Comp
        ref={animate}
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
