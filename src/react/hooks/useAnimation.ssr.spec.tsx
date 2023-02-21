/**
 * @jest-environment node
 */
import { it, describe, expect } from "@jest/globals";
import { useEffect } from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { useAnimation } from "./useAnimation";

describe("SSR", () => {
  const Comp = () => {
    const animate = useAnimation(
      { width: 100 },
      { duration: 600, easing: "ease-in-out" }
    );
    useEffect(() => {
      animate.play();
    }, []);
    return (
      <div ref={animate} style={{ width: 50 }}>
        test
      </div>
    );
  };

  it("should succeed with renderToString", () => {
    expect(renderToString(<Comp />)).toMatchSnapshot();
  });

  it("should succeed with renderToStaticMarkup", () => {
    expect(renderToStaticMarkup(<Comp />)).toMatchSnapshot();
  });
});
