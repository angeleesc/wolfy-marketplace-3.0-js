import React, { useEffect } from "react";

export default function useClickOutSideElement(ref, handler, noRef) {
  const listener = (event) => {
    const el = ref?.current;
    if (el) {
      //   console.log("hay un elemento");

      if (el.contains(event.target)) {
        console.log("estas en el elemento");
        return;
      }
      console.log("no estas en el elemnto");

      return;
    }
    // console.log("no hay elemento");
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
