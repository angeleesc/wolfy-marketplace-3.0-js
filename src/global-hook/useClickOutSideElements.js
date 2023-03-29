import React, { useEffect } from "react";

export default function useClickOutSideElements(handler, ...refs) {
  const listener = (e) => {
    let isInsideInElementeSelected = false;
    console.log(e.target);

    refs.forEach((ref) => {
      const el = ref.current;
      if (el) {
        if (el.contains(e.target)) {
          // console.log("hizo click en unos de los elemento selecionados")
          isInsideInElementeSelected = true;
        } else {
          // console.log("hizo click en uno de los elemento no selecionado")
          isInsideInElementeSelected = false;
        }
      }
    });

    if(isInsideInElementeSelected===true){
      console.log("estas e unos de los elemento selecionados")
      return
    }
    console.log("no esta en unos de los elemntos selecionados")
    handler(e)

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
