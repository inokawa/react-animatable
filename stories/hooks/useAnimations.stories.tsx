import { StoryObj } from "@storybook/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimationOptions, useAnimations } from "../../src";

export default { component: useAnimations };

const Text = ({ children }: { children: string }) => {
  const animate = useAnimations({
    mount: [
      [
        { transform: "translateY(-20px)", opacity: 0.2 },
        { transform: "translateY(0px)", opacity: 1 },
      ],
      { duration: 800, easing: "ease-out" },
    ],
    update: [
      [{ transform: "rotateX(360deg)" }, { transform: "rotateX(0deg)" }],
      { duration: 800, easing: "ease-out" },
    ],
  });

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      animate.play("update");
    } else {
      animate.play("mount");
      mounted.current = true;
    }
  }, [children]);

  return (
    <span
      ref={animate.ref}
      style={{ display: "inline-block", whiteSpace: "pre", fontSize: 32 }}
    >
      {children}
    </span>
  );
};

export const Texts: StoryObj = {
  render: () => {
    const [value, setValue] = useState("Animation");
    return (
      <div style={{ margin: 20 }}>
        <div style={{ marginBottom: 100 }}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div>
          {value.split("").map((t, i) => (
            <Text key={i}>{t}</Text>
          ))}
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
    fill: "both",
    delay: i * 98,
  };
  const animate = useAnimations({
    move: [
      [
        { transform: "translateY(0) scaleX(.8)" },
        { transform: "translateY(95vh) scaleX(1)" },
      ],
      { ...baseTiming, duration: 2500 },
    ],
    opacity: [
      [{ opacity: 1 }, { opacity: 0 }],
      { ...baseTiming, duration: 2000 },
    ],
    color: [
      [
        { backgroundColor: "rgb(239, 239, 255)" },
        { backgroundColor: "#e4c349" },
      ],
      { ...baseTiming, duration: 3000 },
    ],
  });

  useEffect(() => {
    animate.play("move").play("opacity").play("color");
  }, []);

  return (
    <div
      ref={animate.ref}
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
        {rects.map((v, i) => (
          <WavedRect key={i} i={i} />
        ))}
      </div>
    );
  },
};

export const Countdown: StoryObj = {
  render: () => {
    const [count, setCount] = useState(10);
    const animate = useAnimations({
      count: [
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
        },
      ],
      boom: [
        [
          {
            opacity: 0,
            transform: "scale(.01) rotate(-10deg)",
            color: "white",
            offset: 0,
          },
          {
            opacity: 1,
            transform: "scale(1.8) rotate(7deg)",
            color: "orange",
            offset: 0.8,
          },
          {
            opacity: 1,
            transform: "scale(1) rotate(0deg)",
            color: "white",
            offset: 1,
          },
        ],
        {
          duration: 2000,
          easing: "ease-out",
          delay: 0,
          iterations: 1,
        },
      ],
    });

    useEffect(() => {
      animate.play("count");
      let startCount = count;

      const id = setInterval(() => {
        startCount -= 1;
        setCount((p) => p - 1);

        if (startCount > 0) {
          animate.setPlaybackRate("count", (prev) => Math.min(prev * 1.15, 6));
        } else {
          clearInterval(id);
          animate.play("boom");
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
          ref={animate.ref}
          style={{ color: "white", fontSize: 64, fontWeight: "bold" }}
        >
          {count}
        </span>
      </div>
    );
  },
};

export const Sequence: StoryObj = {
  render: () => {
    const timing: AnimationOptions = { duration: 600, easing: "ease-out" };
    const animate = useAnimations({
      red: [{ fill: "red" }, timing],
      blue: [{ fill: "blue" }, timing],
      green: [{ fill: "green" }, timing],
    });

    const onClickRed = useCallback(async () => {
      animate.cancelAll();
      try {
        await animate.play("red").end("red");
      } finally {
        animate.commit("red");
      }
    }, []);
    const onClickBlue = useCallback(async () => {
      animate.cancelAll();
      try {
        await animate.play("blue").end("blue");
      } finally {
        animate.commit("blue");
      }
    }, []);
    const onClickGreen = useCallback(async () => {
      animate.cancelAll();
      try {
        await animate.play("green").end("green");
      } finally {
        animate.commit("green");
      }
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
