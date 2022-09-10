import { describe, it, expect } from "@jest/globals";
import { getKeyframeKeys } from "./waapi";

describe("getKeyframeKeys", () => {
  it("normal", () => {
    expect(
      getKeyframeKeys([
        { transform: "rotate(-720deg) translateX(0px)" },
        { transform: "rotate(-360deg) translateX(-250px)", offset: 0.25 },
        {
          transform: "rotate(0deg) translateX(0px)",
          fill: "red",
          fontSize: "48px",
          fontWeight: "bold",
          offset: 0.75,
        },
        { transform: "rotate(360deg) translateX(0px)", fill: "lightskyblue" },
      ])
    ).toEqual(["transform", "fill", "fontSize", "fontWeight"]);
  });

  it("ignore offset, easing and composite", () => {
    expect(
      getKeyframeKeys([
        { transform: "rotate(-720deg) translateX(0px)", easing: "ease" },
        {
          transform: "rotate(0deg) translateX(0px)",
          offset: 0.75,
          composite: "accumulate",
        },
        { transform: "rotate(360deg) translateX(0px)" },
      ])
    ).toEqual(["transform"]);
  });

  it("map cssFloat and cssOffset", () => {
    expect(getKeyframeKeys([{ cssFloat: "left", cssOffset: 10 }])).toEqual([
      "float",
      "offset",
    ]);
  });
});
