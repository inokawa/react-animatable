import { StoryObj } from "@storybook/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AnimationOptions,
  TypedEasing,
  TypedKeyframe,
  useAnimation,
} from "../../src";
import { mergeRefs } from "react-merge-refs";

const debounce = <T extends (...args: any[]) => void>(fn: T, ms: number) => {
  let id: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (id != null) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      id = null;
      fn(...args);
    }, ms);
  };
};

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
            <g ref={animate} fontSize="24px" fill="dimgray">
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
      ref={animate}
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

export const Mouse: StoryObj = {
  render: () => {
    const rotate = useAnimation(
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
    const move = useAnimation<{ x: number; y: number }>(
      (prev, pos) => [
        { transform: prev.transform },
        { transform: `translate(${pos.x}px, ${pos.y}px)` },
      ],
      {
        duration: 400,
        easing: "ease-in-out",
      }
    );

    useEffect(() => {
      rotate.play();

      const onPointerMove = debounce((e: PointerEvent) => {
        move.play({ args: { x: e.clientX, y: e.clientY } });
      }, 200);
      window.addEventListener("pointermove", onPointerMove);
      return () => {
        window.removeEventListener("pointermove", onPointerMove);
      };
    }, []);

    return (
      <div>
        <div>Move mouse cursor.</div>
        <div ref={move}>
          <div
            ref={rotate}
            style={{
              position: "fixed",
              border: "solid 0.1rem #135569",
              height: "6rem",
              width: "6rem",
              top: "-3rem",
              left: "-3rem",
            }}
          />
        </div>
      </div>
    );
  },
};

export const Scroll: StoryObj = {
  render: () => {
    const animate = useAnimation<{ top: number; left: number }>(
      (prev, pos) => [
        { transform: prev.transform },
        { transform: `translate(${pos.left}px,${pos.top}px)` },
      ],
      {
        duration: 500,
        easing: "ease-in-out",
      }
    );

    const scrollRef = useRef<HTMLDivElement>(null);

    return (
      <div
        ref={scrollRef}
        style={{
          overflow: "scroll",
          width: "100vw",
          height: "100vh",
        }}
        onScroll={useMemo(
          () =>
            debounce(() => {
              if (!scrollRef.current) return;
              animate.play({
                reset: true,
                args: {
                  top: scrollRef.current.scrollTop,
                  left: scrollRef.current.scrollLeft,
                },
              });
            }, 100),
          []
        )}
      >
        <div
          style={{
            position: "relative",
            width: 100000,
            height: 100000,
          }}
        >
          Please scroll!
          <div
            ref={animate}
            style={{
              position: "absolute",
              background: "pink",
              height: "6rem",
              width: "6rem",
            }}
          />
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

    return (
      <div>
        <button onClick={animate.reverse}>Toggle</button>
        <div className="rail">
          <div ref={animate} className="block" />
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
        <path ref={animate} fill="orange" />
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
          ref={animate}
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

export const Sequence: StoryObj = {
  render: () => {
    const animate = useAnimation<string>(
      (prev, color) => [{ fill: prev.fill }, { fill: color }],
      { duration: 600, easing: "ease-out" }
    );

    const onClickAll = useCallback(async () => {
      try {
        await animate.play({ args: "red" }).waitFor("finish");
        await animate.play({ args: "blue" }).waitFor("finish");
        await animate.play({ args: "green" }).waitFor("finish");
      } catch (e) {
        // ignore uncaught promise error
      }
    }, []);

    useEffect(() => {
      onClickAll();
    }, []);

    return (
      <div>
        <svg width={150} height={150}>
          <path
            ref={animate}
            d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
          />
        </svg>
        <div>
          <button
            onClick={() => {
              animate.play({ args: "red" });
            }}
          >
            Red
          </button>
          <button
            onClick={() => {
              animate.play({ args: "blue" });
            }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              animate.play({ args: "green" });
            }}
          >
            Green
          </button>
          <button onClick={onClickAll}>All</button>
        </div>
      </div>
    );
  },
};

const WavedRect = ({ i }: { i: number }) => {
  const baseTiming: AnimationOptions = {
    easing: "ease-in-out",
    iterations: Infinity,
    direction: "alternate",
    delay: i * 98,
  };
  const move = useAnimation(
    [
      { transform: "translateY(0) scaleX(.8)" },
      { transform: "translateY(95vh) scaleX(1)" },
    ],
    { ...baseTiming, duration: 2500 }
  );
  const opacity = useAnimation([{ opacity: 1 }, { opacity: 0 }], {
    ...baseTiming,
    duration: 2000,
  });
  const color = useAnimation(
    [{ backgroundColor: "rgb(239, 239, 255)" }, { backgroundColor: "#e4c349" }],
    { ...baseTiming, duration: 3000 }
  );

  useEffect(() => {
    move.play();
    opacity.play();
    color.play();
  }, []);

  return (
    <div
      ref={mergeRefs([move, opacity, color])}
      style={{
        width: "5vw",
        height: "2.5vh",
        background: "#efefff",
        borderRadius: "1vh",
      }}
    />
  );
};

export const Wave: StoryObj = {
  render: () => {
    const [rects] = useState(() => Array.from({ length: 20 }).map((_, i) => i));

    return (
      <div
        style={{
          background: "#e45349",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {rects.map((i) => (
          <WavedRect key={i} i={i} />
        ))}
      </div>
    );
  },
};

export const Countdown: StoryObj = {
  render: () => {
    const [count, setCount] = useState(10);
    const countAnimation = useAnimation(
      [
        { opacity: 1, transform: "scale(.6)" },
        { opacity: 0.5, transform: "scale(1)" },
      ],
      {
        duration: 500,
        easing: "linear",
        delay: 0,
        iterations: 1000,
        direction: "alternate",
      }
    );
    const boomAnimation = useAnimation(
      [
        {
          opacity: 0,
          transform: "scale(.01) rotate(0deg)",
          color: "white",
          offset: 0,
        },
        {
          opacity: 1,
          transform: "scale(6) rotate(360deg)",
          color: "orange",
          offset: 0.8,
        },
        {
          opacity: 1,
          transform: "scale(1) rotate(720deg)",
          color: "white",
          offset: 1,
        },
      ],
      {
        duration: 2000,
        easing: "ease-out",
        delay: 0,
        iterations: 1,
      }
    );

    useEffect(() => {
      countAnimation.play();
      let startCount = count;

      const id = setInterval(() => {
        startCount -= 1;
        setCount((p) => p - 1);

        if (startCount > 0) {
          countAnimation.setPlaybackRate((prev) => Math.min(prev * 1.15, 6));
        } else {
          clearInterval(id);
          boomAnimation.play();
        }
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }, []);
    return (
      <div
        style={{
          background: "gray",
          width: 400,
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          ref={mergeRefs([countAnimation, boomAnimation])}
          style={{ color: "white", fontSize: 64, fontWeight: "bold" }}
        >
          {count}
        </span>
      </div>
    );
  },
};

const Block = ({ i, length: n }: { i: number; length: number }) => {
  const timing: AnimationOptions = {
    duration: 250,
  };
  const one = useAnimation(
    [{ backgroundColor: "#eee" }, { backgroundColor: "steelblue" }],
    { ...timing, endDelay: 1000 }
  );
  const two = useAnimation(
    [{ backgroundColor: "steelblue" }, { backgroundColor: "orange" }],
    { ...timing, endDelay: 1000 }
  );
  const three = useAnimation(
    [{ backgroundColor: "orange" }, { backgroundColor: "#eee" }],
    { ...timing, endDelay: n }
  );

  useEffect(() => {
    one.cancel();
    two.cancel();
    three.cancel();
    const run = async () => {
      try {
        await one.play().waitFor("finish");
        one.cancel();
        await two.play().waitFor("finish");
        two.cancel();
        await three.play().waitFor("finish");
        three.cancel();
        run();
      } catch (e) {
        // ignore uncaught promise error
      }
    };
    setTimeout(run, i + (Math.random() * n) / 4);
  }, []);

  return (
    <div
      ref={mergeRefs([one, two, three])}
      style={{
        width: 10,
        height: 10,
        margin: " 1px 0 0 1px",
        float: "left",
        background: "#eee",
        display: "inline-block",
      }}
    />
  );
};

export const Chained: StoryObj = {
  render: () => {
    const length = 4002;
    return (
      <div style={{ maxWidth: 960 }}>
        {Array.from({ length: length }).map((_, i) => (
          <Block key={i} i={i} length={length} />
        ))}
      </div>
    );
  },
};
