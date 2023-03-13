import React, { useEffect } from "react";

export default function useClickOutSideElement(ref, handler, noRef) {
  const listener = (event) => {
    const el = ref?.current;
    const el2 = noRef?.current;
    if (el && el2) {
      if (el.contains(event.target) || el2.contains(event.target)) {
        return;
      }

      handler(event);

      return;
    }
  };

  useEffect(() => {
    // listener()
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
