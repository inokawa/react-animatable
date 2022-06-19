import { StoryObj } from "@storybook/react";
import { useCallback, useEffect } from "react";
import { useAnimations } from "../../src";

export default { component: useAnimations };

export const Sequence: StoryObj = {
  render: () => {
    const animate = useAnimations({
      red: [{ fill: "red" }, { duration: 600, easing: "ease-out" }],
      blue: [{ fill: "blue" }, { duration: 600, easing: "ease-out" }],
      green: [{ fill: "green" }, { duration: 600, easing: "ease-out" }],
    });

    const onClickRed = useCallback(async () => {
      await animate.end();
      animate.commit();
      animate.play("red");
    }, []);
    const onClickBlue = useCallback(async () => {
      await animate.end();
      animate.commit();
      animate.play("blue");
    }, []);
    const onClickGreen = useCallback(async () => {
      await animate.end();
      animate.commit();
      animate.play("green");
    }, []);
    const onClickAll = useCallback(async () => {
      await onClickRed();
      await onClickBlue();
      await onClickGreen();
    }, []);

    useEffect(() => {
      onClickAll();
    }, []);

    return (
      <div>
        <svg width={150} height={150}>
          <path
            ref={animate.ref}
            d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
          />
        </svg>
        <div>
          <button onClick={onClickRed}>Red</button>
          <button onClick={onClickBlue}>Blue</button>
          <button onClick={onClickGreen}>Green</button>
          <button onClick={onClickAll}>All</button>
        </div>
      </div>
    );
  },
};
