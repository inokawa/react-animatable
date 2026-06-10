import { ScrollTimelineAxis, TimelineDefinition, ViewTimelineInset } from '../types/index.js';
export interface ViewTimelineOpts {
    axis?: ScrollTimelineAxis;
    inset?: ViewTimelineInset;
}
export declare const useViewTimeline: (opts?: ViewTimelineOpts) => TimelineDefinition;
