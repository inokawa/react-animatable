import { StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import {
  AnimationOptions,
  TypedEasing,
  TypedKeyframe,
  useAnimation,
} from "../../src";

export default { component: useAnimation };

export const Playground: StoryObj = {
  render: () => {
    const [duration, setDuration] = useState(2000);
    const [iteration, setIteration] = useState(2);
    const [direction, setDirection] = useState<PlaybackDirection>("alternate");
    const [easing, setEasing] = useState<TypedEasing>("cubic-bezier");
    const [cubicBezierValues, setCubicBezierValues] = useState<
      [number, number, number, number]
    >([0.65, 0, 0.35, 1]);
    const [stepsValues, setStepsValues] = useState<[number, string]>([
      20,
      "end",
    ]);
    const [delay, setDelay] = useState(0);
    const [endDelay, setEndDelay] = useState(0);

    const animate = useAnimation(
      [
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
      ],
      {
        duration: duration,
        easing:
          easing === "cubic-bezier"
            ? `cubic-bezier(${cubicBezierValues.join(",")})`
            : easing === "steps"
            ? `steps(${stepsValues.join(",")})`
            : easing,
        direction: direction,
        iterations: iteration,
        delay,
        endDelay,
      }
    );

    useEffect(() => {
      animate.play();
    }, [
      duration,
      easing,
      cubicBezierValues,
      stepsValues,
      iteration,
      direction,
      delay,
    ]);

    return (
      <div>
        <svg width={600} height={300} viewBox="0 0 600 300">
          <g transform="translate(100, 100)">
            <g ref={animate.ref} fontSize="24px" fill="dimgray">
              <text>Hello world</text>
            </g>
          </g>
        </svg>
        <div>
          <button onClick={() => animate.play()}>play</button>
          <button onClick={animate.pause}>pause</button>
          <button onClick={animate.reverse}>reverse</button>
          <button onClick={animate.finish}>finish</button>
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
            <label key={v}>
              <input
                type="radio"
                value={v}
                checked={easing === v}
                onChange={(e) => {
                  setEasing(e.target.value as TypedEasing);
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
                setEasing(e.target.value as TypedEasing);
              }}
            />
            cubic-bezier(
            {cubicBezierValues
              .map((v, i) => (
                <input
                  key={i}
                  value={v}
                  type="number"
                  step={0.01}
                  min={0}
                  max={1}
                  onChange={(e) => {
                    setEasing("cubic-bezier");
                    setCubicBezierValues((prev) => {
                      const next: [number, number, number, number] = [...prev];
                      next[i] = Number(e.target.value);
                      return next;
                    });
                  }}
                />
              ))
              .reduce((acc, v, i) => {
                acc.push(v);
                if (i !== cubicBezierValues.length - 1) {
                  acc.push(",");
                }
                return acc;
              }, [] as React.ReactNode[])}
            )
          </label>
          <label>
            <input
              type="radio"
              value="steps"
              checked={easing.indexOf("steps") === 0}
              onChange={(e) => {
                setEasing(e.target.value as TypedEasing);
              }}
            />
            steps(
            {
              <input
                type="number"
                step={1}
                min={1}
                value={stepsValues[0]}
                onChange={(e) => {
                  setEasing("steps");
                  setStepsValues((prev) => [Number(e.target.value), prev[1]]);
                }}
              />
            }
            ,
            <select
              value={stepsValues[1]}
              onChange={(e) => {
                setEasing("steps");
                setStepsValues((prev) => [prev[0], e.target.value]);
              }}
            >
              {[
                "jump-start",
                "jump-end",
                "jump-none",
                "jump-both",
                "start",
                "end",
              ].map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            )
          </label>
        </div>
        <div>
          direction:
          {["normal", "reverse", "alternate", "alternate-reverse"].map((v) => (
            <label key={v}>
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
        <div>
          <label>
            playback rate:
            <input
              type="number"
              min={-100}
              max={100}
              defaultValue={1}
              onChange={(e) => {
                animate.setPlaybackRate(Number(e.target.value));
              }}
            />
          </label>
        </div>
      </div>
    );
  },
};

const Bar = ({
  value,
  i,
  height,
  keep,
}: {
  value: number;
  i: number;
  height: number;
  keep: boolean;
}) => {
  const target: TypedKeyframe = {
    height: `${value}px`,
    transform: `translateY(-${value}px)`,
    opacity: String(1 - i * 0.025),
  };
  const animate = useAnimation(
    keep
      ? (prev) => [
          {
            height: prev.height,
            transform: prev.transform,
            opacity: prev.opacity,
          },
          target,
        ]
      : [target],
    { duration: 150, easing: "ease-out", delay: i * 100 }
  );

  useEffect(() => {
    animate.play();
  }, [value, keep]);

  return (
    <rect
      ref={animate.ref}
      x={i * 20}
      y={height}
      width={18}
      height={0}
      opacity={target.opacity}
      fill="steelblue"
    />
  );
};

export const Bars: StoryObj = {
  render: () => {
    const init = () =>
      Array.from({ length: 30 }).map(() => 300 * Math.random() ** 2);
    const [rects, setRects] = useState(init);
    const [keep, setKeep] = useState(false);

    const width = 800;
    const height = 400;
    const margin = 10;
    const maxBarHeight = height - margin * 2;

    const refresh = () => setRects(init());

    return (
      <>
        <div>
          <button onClick={refresh}>refresh</button>
          <label>
            <input
              type="checkbox"
              checked={keep}
              onChange={(e) => {
                setKeep(e.target.checked);
                refresh();
              }}
            />
            keep
          </label>
        </div>
        <div>
          <svg width={width} height={height}>
            <g transform={`translate(${margin},${margin})`}>
              {rects.map((v, i) => (
                <Bar
                  key={i}
                  i={i}
                  value={v}
                  height={maxBarHeight}
                  keep={keep}
                />
              ))}
            </g>
          </svg>
        </div>
      </>
    );
  },
};

export const Square: StoryObj = {
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
      <div
        ref={animate.ref}
        onMouseEnter={() => {
          animate.pause();
        }}
        onMouseLeave={() => {
          animate.play();
        }}
        style={{
          border: "solid 0.1rem #135569",
          height: "6rem",
          width: "6rem",
          margin: "2rem 0 2rem 2rem",
        }}
      />
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

    return (
      <div>
        <button onClick={animate.reverse}>Toggle</button>
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
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path ref={animate.ref} fill="orange" />
      </svg>
    );
  },
};

export const ThreeDimentional: StoryObj = {
  render: () => {
    const [pos, setPos] = useState({ x: 1, y: 1 });
    const animate = useAnimation(
      { transform: `rotate3d(${pos.y / 100}, ${pos.x / 100}, 0, 360deg)` },
      {
        duration: 1000,
        iterations: Infinity,
      }
    );

    useEffect(() => {
      animate.play();
    }, [pos]);

    useEffect(() => {
      const onPointerMove = (e: PointerEvent) => {
        setPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("pointermove", onPointerMove);
      return () => {
        window.removeEventListener("pointermove", onPointerMove);
      };
    }, []);

    return (
      <>
        <div
          ref={animate.ref}
          style={{
            width: 100,
            height: 100,
            margin: 100,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="face front" />
          <div className="face back" />
          <div className="face right" />
          <div className="face left" />
          <div className="face top" />
          <div className="face bottom" />
        </div>
        <style>
          {`
            .face {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              position: absolute;
              backface-visibility: inherit;
              font-size: 60px;
              color: #fff;
            }
            .front {
              background: rgba(90,90,90,.7);
              transform: translateZ(50px);
            }
            .back {
              background: rgba(0,210,0,.7);
              transform: rotateY(180deg) translateZ(50px);
            }
            .right {
              background: rgba(210,0,0,.7);
              transform: rotateY(90deg) translateZ(50px);
            }
            .left {
              background: rgba(0,0,210,.7);
              transform: rotateY(-90deg) translateZ(50px);
            }
            .top {
              background: rgba(210,210,0,.7);
              transform: rotateX(90deg) translateZ(50px);
            }
            .bottom {
              background: rgba(210,0,210,.7);
              transform: rotateX(-90deg) translateZ(50px);
            }
            `}
        </style>
      </>
    );
  },
  name: "3D",
};
