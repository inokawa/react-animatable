import {
  createContext,
  Fragment,
  useRef,
  Children,
  useEffect,
  useState,
  ReactElement,
  useCallback,
} from "react";
import { noop } from "../../core/utils";

const toMap = (elements: ReactElement[]) =>
  elements.reduce((acc, e, i) => {
    acc[e.key || i] = e;
    return acc;
  }, {} as { [key: string]: ReactElement });

/** @internal */
export type TransitionState = "update" | "enter" | "exit";
/** @internal */
export const TransitionStateContext = createContext<TransitionState>("update");

/** @internal */
export const NOT_EXIT = 0;
/** @internal */
export const EXITING = 1;
/** @internal */
export const EXITED = 2;
/** @internal */
export type TransitionExitState =
  | typeof NOT_EXIT
  | typeof EXITING
  | typeof EXITED;
/** @internal */
export const TransitionNotifierContext =
  createContext<(state: TransitionExitState) => void>(noop);

const Provider = ({
  _state: state,
  _element: element,
}: {
  _state: TransitionState;
  _element: ReactElement;
}): ReactElement => {
  const [show, setShow] = useState(true);
  const hasExitRef = useRef(false);

  const showChildren =
    state === "exit" ? (hasExitRef.current ? show : false) : true;

  useEffect(() => {
    if (state === "enter") {
      setShow(true);
    }
  }, [state]);
  return (
    <TransitionStateContext.Provider value={state}>
      <TransitionNotifierContext.Provider
        value={useCallback((s) => {
          if (s === EXITED) {
            setShow(false);
          } else {
            hasExitRef.current = s === EXITING;
          }
        }, [])}
      >
        {showChildren ? element : null}
      </TransitionNotifierContext.Provider>
    </TransitionStateContext.Provider>
  );
};

export interface TransitionGroupProps {
  children: ReactElement | ReactElement[];
}

/**
 * A component to manage enter/update/exit of its children by key, that works similar to [TransitionGroup of react-transition-group](https://reactcommunity.org/react-transition-group/transition-group).
 */
export const TransitionGroup = ({
  children,
}: TransitionGroupProps): ReactElement => {
  const elemsRef = useRef<ReactElement[]>(null!);
  const prevElems = elemsRef.current || [];
  const elems = Children.map(children, (c) => c);

  useEffect(() => {
    elemsRef.current = elems;
  });

  const elemsByKey = toMap(elems);
  const prevElemsByKey = toMap(prevElems);

  const res: ReactElement[] = [];
  prevElems.forEach((v, i) => {
    const key = v.key || i;
    if (elemsByKey[key]) {
      // update
      res.push(
        <Provider key={key} _state="update" _element={elemsByKey[key]!} />
      );
    } else {
      // exit
      res.push(<Provider key={key} _state="exit" _element={v} />);
    }
  });
  elems.forEach((v, i) => {
    const key = v.key || i;
    if (prevElemsByKey[key]) {
      // update
    } else {
      // enter
      res.push(<Provider key={key} _state="enter" _element={v} />);
    }
  });

  return <Fragment>{res}</Fragment>;
};
