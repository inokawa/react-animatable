import { assign } from "../../core/utils.js";
import { ScrollTimelineAxis, TimelineDefinition } from "../types/index.js";
import { SCROLL_TIMELINE } from "../types/internal.js";
import { useLatestRef } from "./useLatestRef.js";
import { useStatic } from "./useStatic.js";

export interface ScrollTimelineOpts {
  axis?: ScrollTimelineAxis;
}

export const useScrollTimeline = (
  opts: ScrollTimelineOpts = {}
): TimelineDefinition => {
  const optsRef = useLatestRef(opts);

  return useStatic(() => {
    let _target: Element | null;
    return assign(
      (ref: Element | null) => {
        _target = ref;
      },
      {
        _type: SCROLL_TIMELINE,
        _get: () => {
          const { axis } = optsRef.current;
          return new ScrollTimeline({
            source: _target || document.documentElement,
            axis,
          });
        },
      } as const
    );
  });
};
