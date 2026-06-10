import { ScrollTimelineAxis, TimelineDefinition } from '../types/index.js';
export interface ScrollTimelineOpts {
    axis?: ScrollTimelineAxis;
}
export declare const useScrollTimeline: (opts?: ScrollTimelineOpts) => TimelineDefinition;
