import React, { useEffect } from "react";

export default function useClickOutSideElements(handler, ...refs) {
  
  const listener = (e) => {
    let isInsideInElementeSelected = true;
    console.log(e.target);

    refs.forEach(ref=>{

      const el = ref.current
      if(el){
        if(el.contains(e.target)){
          console.log("hizo click en unos de los elemento selecionados")
        }else{
          console.log("hizo click en uno de los elemento no selecionado")
        }
      }

    })

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
