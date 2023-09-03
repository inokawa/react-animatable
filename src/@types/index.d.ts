// TODO replace if added to lib.dom.d.ts
declare var ScrollTimeline: {
  prototype: AnimationTimeline;
  new (opts: {
    source: Element;
    axis?: "block" | "inline" | "y" | "x" | undefined;
  }): AnimationTimeline;
};

// TODO replace if added to lib.dom.d.ts
declare var ViewTimeline: {
  prototype: AnimationTimeline;
  new (opts: {
    subject: Element;
    axis?: "block" | "inline" | "y" | "x" | undefined;
    inset?: "auto" | (string & {}) | undefined;
  }): AnimationTimeline;
};
