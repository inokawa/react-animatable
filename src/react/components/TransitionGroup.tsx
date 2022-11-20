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

export type TransitionState = "update" | "enter" | "exit";
export const TransitionStateContext = createContext<TransitionState>("update");

export const NOT_EXIT = 0;
export const EXITING = 1;
export const EXITED = 2;
export type TransitionExitState =
  | typeof NOT_EXIT
  | typeof EXITING
  | typeof EXITED;
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

export type TransitionGroupProps = {
  children: ReactElement | ReactElement[];
};

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
