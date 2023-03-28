import React, { useRef, useState } from "react";
import useClickOutSideElements from "../../global-hook/useClickOutSideElements";

export default function HabugerMenuLayuot({ icon, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  const handler = () => {};
  useClickOutSideElements(handler, buttonRef);

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
      {isOpen && <div className="hambuger-bg-3"></div>}
      {isOpen && <div className="hambuger-drop-menu-body">{children}</div>}
    </div>
  );
}
