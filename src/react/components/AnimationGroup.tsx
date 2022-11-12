import {
  createContext,
  Fragment,
  useRef,
  Children,
  useEffect,
  useState,
  ReactElement,
  MutableRefObject,
} from "react";
import { noop } from "../../core/utils";

const toMap = (elements: ReactElement[]) =>
  elements.reduce((acc, e, i) => {
    acc[e.key || i] = e;
    return acc;
  }, {} as { [key: string]: ReactElement });

export type TransitionState = "update" | "enter" | "exit";
export const TransitionHasExitContext = createContext<
  MutableRefObject<boolean>
>(null!);
export const TransitionStateContext = createContext<TransitionState>("update");
export const TransitionNotifierContext =
  createContext<(show: boolean) => void>(noop);

const Provider = ({
  s: state,
  children,
}: {
  s: TransitionState;
  children: ReactElement;
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
      <TransitionNotifierContext.Provider value={setShow}>
        <TransitionHasExitContext.Provider value={hasExitRef}>
          {showChildren ? children : null}
        </TransitionHasExitContext.Provider>
      </TransitionNotifierContext.Provider>
    </TransitionStateContext.Provider>
  );
};

export type AnimationGroupProps = {
  children: ReactElement | ReactElement[];
};

export const AnimationGroup = ({
  children,
}: AnimationGroupProps): ReactElement => {
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
        <Provider key={key} s="update">
          {elemsByKey[key]!}
        </Provider>
      );
    } else {
      // exit
      res.push(
        <Provider key={key} s="exit">
          {v}
        </Provider>
      );
    }
  });
  elems.forEach((v, i) => {
    const key = v.key || i;
    if (prevElemsByKey[key]) {
      // update
    } else {
      // enter
      res.push(
        <Provider key={key} s="enter">
          {v}
        </Provider>
      );
    }
  });

  return <Fragment>{res}</Fragment>;
};
