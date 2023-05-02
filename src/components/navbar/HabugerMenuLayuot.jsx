import React, { useEffect, useRef, useState } from "react";
import useClickOutSideElements from "../../global-hook/useClickOutSideElements";

export default function HabugerMenuLayuot({ icon, children, }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  const boxRef = useRef();
  const handler = (e) => {
    // setIsOpen(false);

    const el1 = buttonRef.current;
    const el2 = boxRef.current;

    if (el1 && el2) {
      console.log("el elemento exite");

      if(el1.contains(e.target)|| el2.contains(e.target)){
        console.log("estas dentro del elemnto")
        return
      }

      console.log("estas fuera del elemento")
      setIsOpen(false)

    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handler);

    return()=>{
      document.removeEventListener("mousedown", handler)
    }
  }, []);

  return (
    <div className="hambuger-drop-menu h-menu-active">
      <button
        ref={buttonRef}
        className="hambuger-drop-menu-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {/* <FaBars /> */}
        {icon ? icon : "?"}
      </button>
      {isOpen && <div className="hambuger-bg-1"></div>}
      {isOpen && <div className="hambuger-bg-2"></div>}
      {isOpen && (
        <div
          className="hambuger-bg-3"
          onAnimationEnd={(e) => {
            console.log("animacion finalizada");
          }}
        ></div>
      )}
      {isOpen && (
        <div className="hambuger-drop-menu-body" ref={boxRef}>
          {children}
        </div>
      )}
    </div>
  );
}
