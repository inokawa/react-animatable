import { assign } from "../../core/utils.js";
import {
  ScrollTimelineAxis,
  TimelineDefinition,
  ViewTimelineInset,
} from "../types/index.js";
import { VIEW_TIMELINE } from "../types/internal.js";
import { useLatestRef } from "./useLatestRef.js";
import { useStatic } from "./useStatic.js";

export interface ViewTimelineOpts {
  axis?: ScrollTimelineAxis;
  inset?: ViewTimelineInset;
}

export const useViewTimeline = (
  opts: ViewTimelineOpts = {}
): TimelineDefinition => {
  const optsRef = useLatestRef(opts);

  return useStatic(() => {
    let _target: Element | null;
    return assign(
      (ref: Element | null) => {
        _target = ref;
      },
      {
        _type: VIEW_TIMELINE,
        _get: () => {
          const { axis, inset } = optsRef.current;
          return new ViewTimeline({
            subject: _target || document.documentElement,
            axis,
            inset,
          });
        },
      } as const
    );
  });
};
