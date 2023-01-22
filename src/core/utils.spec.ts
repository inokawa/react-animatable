import { describe, it, expect } from "@jest/globals";
import { isSameObject, isSameObjectArray } from "./utils";

describe("isSameObject", () => {
  it("should return true if the objects are same", () => {
    expect(
      isSameObject(
        { transform: "translateX(0px)", fill: "lightskyblue" },
        { transform: "translateX(0px)", fill: "lightskyblue" }
      )
    ).toBe(true);
  });

  it("should return true if the fields order is changed", () => {
    expect(
      isSameObject(
        { transform: "translateX(0px)", fill: "lightskyblue" },
        { fill: "lightskyblue", transform: "translateX(0px)" }
      )
    ).toBe(true);
  });

  it("should return true if the objects are empty", () => {
    expect(isSameObject({}, {})).toBe(true);
  });

  it("should return false if a field is changed", () => {
    expect(
      isSameObject(
        { transform: "translateX(0px)", fill: "lightskyblue" },
        { transform: "translateX(100px)", fill: "lightskyblue" }
      )
    ).toBe(false);
  });

  it("should return false if a field name is changed", () => {
    expect(
      isSameObject(
        { transform: "translateX(0px)", fill: "lightskyblue" },
        { transform: "translateX(0px)", color: "lightskyblue" }
      )
    ).toBe(false);
  });

  it("should return false if a field is added", () => {
    expect(
      isSameObject(
        { transform: "translateX(0px)", fill: "lightskyblue" },
        { transform: "translateX(0px)", fill: "lightskyblue", color: "red" }
      )
    ).toBe(false);
  });

  it("should return false if a field is deleted", () => {
    expect(
      isSameObject(
        { transform: "translateX(0px)", fill: "lightskyblue" },
        { transform: "translateX(0px)" }
      )
    ).toBe(false);
  });
});

describe("isSameObjectArray", () => {
  it("should return true if the arrays are same", () => {
    expect(
      isSameObjectArray(
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red" },
        ],
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red" },
        ]
      )
    ).toBe(true);
  });

  it("should return true if the arrays are empty", () => {
    expect(isSameObjectArray([], [])).toBe(true);
  });

  it("should return false if a field is updated", () => {
    expect(
      isSameObjectArray(
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red" },
        ],
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(50px)", fill: "red" },
        ]
      )
    ).toBe(false);
  });

  it("should return false if a field is deleted", () => {
    expect(
      isSameObjectArray(
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red" },
        ],
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)" },
        ]
      )
    ).toBe(false);
  });

  it("should return false if a field is added", () => {
    expect(
      isSameObjectArray(
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red" },
        ],
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red", color: "blue" },
        ]
      )
    ).toBe(false);
  });

  it("should return false if an object is added", () => {
    expect(
      isSameObjectArray(
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red" },
        ],
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red" },
          { transform: "translateX(100px)", fill: "red" },
        ]
      )
    ).toBe(false);
  });

  it("should return false if an object is added", () => {
    expect(
      isSameObjectArray(
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red" },
        ],
        [{ transform: "translateX(0px)", fill: "lightskyblue" }]
      )
    ).toBe(false);
  });

  it("should return false if the object order is changed", () => {
    expect(
      isSameObjectArray(
        [
          { transform: "translateX(0px)", fill: "lightskyblue" },
          { transform: "translateX(100px)", fill: "red" },
        ],
        [
          { transform: "translateX(100px)", fill: "red" },
          { transform: "translateX(0px)", fill: "lightskyblue" },
        ]
      )
    ).toBe(false);
  });
});
