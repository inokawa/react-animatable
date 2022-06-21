import { StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { AnimationGroup, useEnterExitAnimation } from "../../src";

export default { component: useEnterExitAnimation };

const Text = ({ children }: { children: string }) => {
  const prev = useRef(children);
  useEffect(() => {
    prev.current = children;
  }, [children]);

  const timing = { duration: 800, easing: "ease-out" };
  const animate = useEnterExitAnimation({
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
    update:
      children !== prev.current
        ? [
            [{ transform: "rotateX(360deg)" }, { transform: "rotateX(0deg)" }],
            timing,
          ]
        : [{}],
  });

  return (
    <span
      ref={animate.ref}
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
          <AnimationGroup>
            {value.split("").map((t, i) => (
              <Text key={i}>{t}</Text>
            ))}
          </AnimationGroup>
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
  const prevX = useRef(x);
  useEffect(() => {
    prevX.current = x;
  }, [x]);
  const timing = { duration: 800, easing: "ease-in-out" };
  const transition = useEnterExitAnimation({
    update: [
      [
        { transform: `translateX(${prevX.current - x}px)` },
        { transform: `translateX(0px)` },
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
    <text ref={transition.ref} x={x} y={0} fill="#333">
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
            <AnimationGroup>
              {texts.map((t, i) => (
                <SvgText key={t} i={i}>
                  {t}
                </SvgText>
              ))}
            </AnimationGroup>
          </g>
        </svg>
        <style>{`text { font: bold 28px monospace; }`}</style>
      </>
    );
  },
};
