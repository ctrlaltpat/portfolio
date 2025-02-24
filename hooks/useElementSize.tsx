import { DependencyList, RefObject } from "react";

type Size = {
  height: number;
  width: number;
};

import useEventListener from "./useEventListener";
import { useCallback, useRef, useState } from "react";

const useElementSize = <T extends HTMLElement = HTMLDivElement>(
  deps: DependencyList = []
): [RefObject<T | null>, Size, () => void] => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const refresh = useCallback(() => {
    if (ref.current) {
      const { clientWidth, clientHeight } = ref.current;
      setSize({
        width: clientWidth,
        height: clientHeight,
      });
    }
  }, deps);

  useEventListener("resize", refresh);
  useEventListener("scroll", refresh);

  return [ref, size, refresh];
};

export default useElementSize;
