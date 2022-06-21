import {
  createContext,
  Fragment,
  useRef,
  Children,
  useEffect,
  useState,
} from "react";
import { noop } from "../utils";

const toMap = (elements: React.ReactElement[]) =>
  elements.reduce((acc, e, i) => {
    acc[e.key || i] = e;
    return acc;
  }, {} as { [key: string]: React.ReactElement });

export type TransitionState = "update" | "enter" | "exit";
export const TransitionHasExitContext = createContext<
  React.MutableRefObject<boolean>
>(null!);
export const TransitionStateContext = createContext<TransitionState>("update");
export const TransitionNotifierContext =
  createContext<(show: boolean) => void>(noop);

const Provider = ({
  s: state,
  children,
}: {
  s: TransitionState;
  children: React.ReactElement;
}): React.ReactElement => {
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
  children: React.ReactElement | React.ReactElement[];
};

export const AnimationGroup = ({
  children,
}: AnimationGroupProps): React.ReactElement => {
  const elemsRef = useRef<React.ReactElement[]>(null!);
  const prevElems = elemsRef.current || [];
  const elems = Children.map(children, (c) => c);

  useEffect(() => {
    elemsRef.current = elems;
  });

  const elemsByKey = toMap(elems);
  const prevElemsByKey = toMap(prevElems);

  const res: React.ReactElement[] = [];
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
