import { StoryObj } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
import {
  TransitionGroup,
  AnimationOptions,
  useTransitionAnimation,
} from "../../src";

export default { component: useTransitionAnimation };

const usePrevious = <T,>(value: T) => {
  const prev = useRef(value);
  useEffect(() => {
    prev.current = value;
  }, [value]);
  return prev.current;
};

const Text = ({ children }: { children: string }) => {
  const prev = usePrevious(children);

  const timing = { duration: 800, easing: "ease-out" };
  const animate = useTransitionAnimation({
    enter: [
      [
        { transform: "translateY(-20px)", opacity: 0.2 },
        { transform: "translateY(0px)", opacity: 1 },
      ],
      timing,
    ],
    exit: [
      [
        { transform: "translateY(0px)", opacity: 1 },
        { transform: "translateY(20px)", opacity: 0.2 },
      ],
      timing,
    ],
    update: [
      [{ transform: "rotateX(360deg)" }, { transform: "rotateX(0deg)" }],
      children !== prev ? timing : undefined,
    ],
  });

  return (
    <span
      ref={animate}
      style={{ display: "inline-block", whiteSpace: "pre", fontSize: 32 }}
    >
      {children}
    </span>
  );
};

export const Input: StoryObj = {
  render: () => {
    const [value, setValue] = useState("Animation");
    return (
      <div style={{ margin: 20 }}>
        <div style={{ marginBottom: 100 }}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div>
          <TransitionGroup>
            {value.split("").map((t, i) => (
              <Text key={i}>{t}</Text>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  },
};

const shuffle = <T,>(array: T[]): T[] => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const SvgText = ({ children, i }: { children: string; i: number }) => {
  const x = i * 20;
  const prevX = usePrevious(x);
  const timing = { duration: 800, easing: "ease-in-out" };
  const transition = useTransitionAnimation({
    update: [
      (prev) => [
        { fill: prev.fill, transform: `translateX(${prevX - x}px)` },
        { fill: "#333", transform: `translateX(0px)` },
      ],
      timing,
    ],
    enter: [
      [
        { fill: "green", fillOpacity: "0", transform: "translateY(-20px)" },
        { fill: "green", fillOpacity: "1", transform: "translateY(0px)" },
      ],
      timing,
    ],
    exit: [
      { fill: "brown", fillOpacity: "0", transform: "translateY(20px)" },
      timing,
    ],
  });

  return (
    <text ref={transition} x={x} y={0} fill="#333">
      {children}
    </text>
  );
};

const ALPHABETS = "abcdefghijklmnopqrstuvwxyz".split("");

export const Alphabet: StoryObj = {
  render: () => {
    const [texts, setTexts] = useState(ALPHABETS);
    useEffect(() => {
      const id = setInterval(() => {
        const shuffled = shuffle(ALPHABETS)
          .slice(0, Math.floor(Math.random() * 26))
          .sort();
        setTexts(shuffled);
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }, []);

    return (
      <>
        <svg width={600} height={400}>
          <g transform={`translate(${25},${50})`}>
            <TransitionGroup>
              {texts.map((t, i) => (
                <SvgText key={t} i={i}>
                  {t}
                </SvgText>
              ))}
            </TransitionGroup>
          </g>
        </svg>
        <style>{`text { font: bold 28px monospace; }`}</style>
      </>
    );
  },
};

const ExpandRect = ({ i, length }: { i: number; length: number }) => {
  const timing: AnimationOptions = {
    easing: "ease-in-out",
    direction: "alternate",
    duration: 1000,
  };

  const startStyle = (s: CSSStyleDeclaration, defaultScale: number) => {
    const transform = s.transform;
    const scale =
      transform.slice("matrix".length + 1, transform.indexOf(",") - 1) ||
      defaultScale;
    return {
      backgroundColor: s.backgroundColor,
      transform: `scale(${scale})`,
      opacity: s.opacity,
    };
  };

  const transition = useTransitionAnimation({
    enter: [
      (prev) => [
        startStyle(prev, 0),
        { backgroundColor: "skyblue", transform: "scale(1)", opacity: 1 },
      ],
      { ...timing, delay: i * 100 },
    ],
    exit: [
      (prev) => [
        startStyle(prev, 1),
        {
          backgroundColor: "limegreen",
          transform: "scale(0)",
          opacity: 0,
        },
      ],
      { ...timing, delay: (length - i) * 100 },
    ],
  });

  return (
    <div
      ref={transition}
      style={{
        width: "100px",
        height: "100px",
        background: "#efefff",
        margin: 4,
        backgroundColor: "limegreen",
        transform: "scale(0)",
        opacity: 0,
      }}
    />
  );
};

export const Expand: StoryObj = {
  render: () => {
    const [expanded, setExpanded] = useState(true);
    const length = 16;
    const [rects] = useState(() => Array.from({ length }).map((_, i) => i));

    return (
      <>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          style={{ marginBottom: 10 }}
        >
          {expanded ? "close" : "open"}
        </button>
        <div
          style={{
            background: "whitesmoke",
            width: "500px",
            height: "500px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            alignContent: "flex-start",
          }}
        >
          <TransitionGroup>
            {expanded
              ? rects.map((i) => <ExpandRect key={i} i={i} length={length} />)
              : []}
          </TransitionGroup>
        </div>
      </>
    );
  },
};
