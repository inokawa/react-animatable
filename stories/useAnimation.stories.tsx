import { StoryObj } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { useAnimation } from "../src";

export default { component: useAnimation };

export const Hello: StoryObj = {
  render: () => {
    type EasingType =
      | "linear"
      | "ease"
      | "ease-in"
      | "ease-out"
      | "ease-in-out"
      | "cubic-bezier";

    const [duration, setDuration] = useState(2000);
    const [iteration, setIteration] = useState(2);
    const [direction, setDirection] = useState<PlaybackDirection>("alternate");
    const [easing, setEasing] = useState<EasingType>("cubic-bezier");
    const [cubicBezierValue, setCubicBezierValue] =
      useState<string>("0.65, 0, 0.35, 1");
    const [delay, setDelay] = useState(0);
    const [endDelay, setEndDelay] = useState(0);

    const animate = useAnimation(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(-300px)", offset: 0.1 },
        {
          transform: "rotate(0deg)",
          fill: "red",
          fontSize: "36px",
          offset: 0.75,
        },
        { transform: "rotate(360deg)" },
      ],
      {
        duration: duration,
        easing:
          easing === "cubic-bezier"
            ? `cubic-bezier(${cubicBezierValue})`
            : easing,
        direction: direction,
        iterations: iteration,
        delay,
        endDelay,
      }
    );

    useEffect(() => {
      animate.play();
    }, [duration, easing, cubicBezierValue, iteration, direction, delay]);

    return (
      <div>
        <svg width={600} height={300} viewBox="0 0 600 300">
          <g transform="translate(100, 100)">
            <text ref={animate.ref} fontSize="24px" fill="lightblue">
              Hello world
            </text>
          </g>
        </svg>
        <div>
          <button
            onClick={() => {
              animate.play();
            }}
          >
            play
          </button>
          <button
            onClick={() => {
              animate.pause();
            }}
          >
            pause
          </button>
          <button
            onClick={() => {
              animate.reverse();
            }}
          >
            reverse
          </button>
          <button
            onClick={() => {
              animate.finish();
            }}
          >
            finish
          </button>
        </div>
        <div>
          <label>
            duration:
            <input
              type="number"
              min={0}
              value={duration}
              onChange={(e) => {
                setDuration(Number(e.target.value));
              }}
            />
            ms
          </label>
        </div>
        <div>
          <label>
            iteration:
            <input
              type="number"
              min={1}
              value={iteration}
              onChange={(e) => {
                setIteration(Number(e.target.value));
              }}
            />
          </label>
        </div>
        <div>
          easing:
          {["linear", "ease", "ease-in", "ease-out", "ease-in-out"].map((v) => (
            <label>
              <input
                type="radio"
                value={v}
                checked={easing === v}
                onChange={(e) => {
                  setEasing(e.target.value as EasingType);
                }}
              />
              {v}
            </label>
          ))}
          <label>
            <input
              type="radio"
              value="cubic-bezier"
              checked={easing.indexOf("cubic-bezier") === 0}
              onChange={(e) => {
                setEasing(e.target.value as EasingType);
              }}
            />
            cubic-bezier(
            {
              <input
                value={cubicBezierValue}
                onChange={(e) => {
                  setEasing("cubic-bezier");
                  setCubicBezierValue(e.target.value);
                }}
              />
            }
            )
          </label>
        </div>
        <div>
          direction:
          {["normal", "reverse", "alternate", "alternate-reverse"].map((v) => (
            <label>
              <input
                type="radio"
                value={v}
                checked={direction === v}
                onChange={(e) => {
                  setDirection(e.target.value as PlaybackDirection);
                }}
              />
              {v}
            </label>
          ))}
        </div>
        <div>
          <label>
            delay:
            <input
              type="number"
              min={0}
              value={delay}
              onChange={(e) => {
                setDelay(Number(e.target.value));
              }}
            />
            ms
          </label>
        </div>
        <div>
          <label>
            endDelay:
            <input
              type="number"
              min={0}
              value={endDelay}
              onChange={(e) => {
                setEndDelay(Number(e.target.value));
              }}
            />
            ms
          </label>
        </div>
        <div>
          <label>
            time:
            <input
              type="range"
              defaultValue="0"
              min={0}
              max={duration}
              onChange={(e) => {
                animate.setTime(Number(e.target.value) * iteration);
              }}
            />
            ms
          </label>
        </div>
      </div>
    );
  },
};

export const Toggle: StoryObj = {
  render: () => {
    const animate = useAnimation(
      { transform: "translate3d(400px, 0, 0)" },
      { duration: 800, easing: "ease-in-out" }
    );

    useEffect(() => {
      animate.play();
    }, [animate]);

    const onClick = useCallback(() => {
      animate.reverse();
    }, [animate]);

    return (
      <div>
        <button onMouseDown={onClick} onTouchStart={onClick}>
          Toggle
        </button>
        <div className="rail">
          <div ref={animate.ref} className="block" />
        </div>
        <style>
          {`
.rail {
  border-radius: 4px;
  background-color: rgb(240, 240, 232);
  position: relative;
  margin: 5px 3px 10px;
  width: 450px;
  height: 50px;
}
.block {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: rgb(130, 181, 198);
}
`}
        </style>
      </div>
    );
  },
};

export const Path: StoryObj = {
  render: () => {
    const animate = useAnimation(
      [
        { d: "path('M50,50L150,50L150,150L50,150z')" },
        { d: "path('M100,30L170,170L30,170L30,170z')" },
      ],
      {
        duration: 1000,
        easing: "ease-in-out",
        iterations: Infinity,
        direction: "alternate",
      }
    );

    useEffect(() => {
      animate.play();
    }, []);

    const width = 400;
    const height = 300;

    return (
      <>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path ref={animate.ref} fill="orange" />
        </svg>
      </>
    );
  },
};
