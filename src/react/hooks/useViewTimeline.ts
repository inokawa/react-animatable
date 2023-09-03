import { assign } from "../../core/utils";
import {
  ScrollTimelineAxis,
  TimelineDefinition,
  ViewTimelineInset,
} from "../types";
import { VIEW_TIMELINE } from "../types/internal";
import { useLatestRef } from "./useLatestRef";
import { useStatic } from "./useStatic";

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
