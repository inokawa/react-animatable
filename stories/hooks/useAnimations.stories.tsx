import { StoryObj } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { AnimationOptions, useAnimations } from "../../src";

export default { component: useAnimations };

const WavedRect = ({ i }: { i: number }) => {
  const baseTiming: AnimationOptions = {
    easing: "ease-in-out",
    iterations: Infinity,
    direction: "alternate",
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

const Block = ({ i, length: n }: { i: number; length: number }) => {
  const timing: AnimationOptions = {
    duration: 250,
  };
  const animate = useAnimations({
    one: [
      [{ backgroundColor: "#eee" }, { backgroundColor: "steelblue" }],
      { ...timing, endDelay: 1000 },
    ],
    two: [
      [{ backgroundColor: "steelblue" }, { backgroundColor: "orange" }],
      { ...timing, endDelay: 1000 },
    ],
    three: [
      [{ backgroundColor: "orange" }, { backgroundColor: "#eee" }],
      { ...timing, endDelay: n },
    ],
  });

  useEffect(() => {
    const run = async () => {
      animate.cancelAll();
      await animate.play("one").end("one");
      animate.cancel("one");
      await animate.play("two").end("two");
      animate.cancel("two");
      await animate.play("three").end("three");
      run();
    };
    setTimeout(run, i + (Math.random() * n) / 4);
  }, []);

  return (
    <div
      ref={animate.ref}
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

export const Sequence: StoryObj = {
  render: () => {
    const timing: AnimationOptions = { duration: 600, easing: "ease-out" };
    const animate = useAnimations({
      red: [{ fill: "red" }, timing],
      blue: [{ fill: "blue" }, timing],
      green: [{ fill: "green" }, timing],
    });

    const onClickRed = useCallback(async () => {
      try {
        await animate.play("red").end("red");
      } finally {
        animate.persist("red");
      }
    }, []);
    const onClickBlue = useCallback(async () => {
      try {
        await animate.play("blue").end("blue");
      } finally {
        animate.persist("blue");
      }
    }, []);
    const onClickGreen = useCallback(async () => {
      try {
        await animate.play("green").end("green");
      } finally {
        animate.persist("green");
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
