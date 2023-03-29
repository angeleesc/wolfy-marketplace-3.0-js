import React, { useRef, useState } from "react";
import useClickOutSideElements from "../../global-hook/useClickOutSideElements";

export default function HabugerMenuLayuot({ icon, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  const boxRef = useRef();
  const handler = (e) => {
    setIsOpen(false);
  };
  useClickOutSideElements(handler, buttonRef, boxRef);

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
