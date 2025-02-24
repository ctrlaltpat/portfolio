import { useLayoutEffect } from "react";

const useEventListener = (
  event: string,
  listener: () => void,
) => {
  useLayoutEffect(() => {
    if (listener) {
      listener();
      window.addEventListener(event, listener);

      return () => window.removeEventListener(event, listener);
    }

    return () => {};
  }, [event, listener]);
};

export default useEventListener;