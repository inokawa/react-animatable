/**
 * @jest-environment node
 */
import { it, describe, expect } from "@jest/globals";
import { useEffect, useState } from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import {
  useAnimationFunction,
  ComputedTimingContext,
} from "./useAnimationFunction";

describe("SSR", () => {
  const Comp = () => {
    const [value, setValue] = useState(0);
    const animate = useAnimationFunction(
      (ctx: ComputedTimingContext) => {
        setValue(ctx.progress);
      },
      {
        duration: 600,
        easing: "ease-in-out",
      }
    );
    useEffect(() => {
      animate.play();
    }, []);
    return <div>{value}</div>;
  };

  it("should succeed with renderToString", () => {
    expect(renderToString(<Comp />)).toMatchSnapshot();
  });

  it("should succeed with renderToStaticMarkup", () => {
    expect(renderToStaticMarkup(<Comp />)).toMatchSnapshot();
  });
});
