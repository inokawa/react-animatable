import { ReactElement } from '../../../node_modules/react';
export interface TransitionGroupProps {
    children: ReactElement | ReactElement[];
}
/**
 * A component to manage enter/update/exit of its children by key, that works similar to [TransitionGroup of react-transition-group](https://reactcommunity.org/react-transition-group/transition-group).
 */
export declare const TransitionGroup: ({ children, }: TransitionGroupProps) => ReactElement;
