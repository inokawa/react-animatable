import { StoryObj } from "@storybook/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAnimationFunction } from "../src";

export default { component: useAnimationFunction };

export const Text: StoryObj = {
  render: () => {
    const [enable, setEnable] = useState(true);
    const [time, setTime] = useState(0);
    const animate = useAnimationFunction(
      ({ progress }) => {
        setTime(progress);
      },
      {
        duration: 1000,
        easing: "ease-in-out",
        iterations: Infinity,
        direction: "alternate",
      }
    );

    useEffect(() => {
      animate.play();
    }, [animate]);

    const onClick = useCallback(() => {
      setEnable((p) => !p);
      if (enable) {
        animate.pause();
      } else {
        animate.play();
      }
    }, [animate, enable]);

    return (
      <div>
        <button onMouseDown={onClick} onTouchStart={onClick}>
          {enable ? "stop" : "start"}
        </button>
        <div>{time.toFixed(6)}</div>
      </div>
    );
  },
};

export const Canvas: StoryObj = {
  render: () => {
    const ref = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const width = 400;
    const height = 400;
    const animate = useAnimationFunction(
      (timing) => {
        if (!ref.current) return;
        const ctx =
          ctxRef.current || (ctxRef.current = ref.current.getContext("2d")!);
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 50 * timing.progress, 0, Math.PI * 2);
        ctx.fillStyle = ["red", "blue", "green"][timing.currentIteration % 3];
        ctx.fill();
      },
      {
        easing: "ease-in-out",
        duration: 1000,
        iterations: Infinity,
        fill: "both",
      }
    );

    useEffect(() => {
      animate.play();
    }, [animate]);

    return <canvas ref={ref} width={width} height={height} />;
  },
};
