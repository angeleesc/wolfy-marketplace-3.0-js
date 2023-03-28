import React, { useEffect } from "react";

export default function useClickOutSideElements(handler, ...refs) {
  
  const listener = (e) => {
    let isInsideInElementeSelected = true;
    console.log(e.target);
  };

  useEffect(() => {
    // listener()
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}
