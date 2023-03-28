import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import useClickOutSideElements from "../../global-hook/useClickOutSideElements";

export default function HambugerDropmenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef();
  const handler = ()=>{
   

  }
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
        <FaBars />
      </button>
      {isOpen && <div className="hambuger-bg-1"></div>}
      {isOpen && <div className="hambuger-bg-2"></div>}
      {isOpen && <div className="hambuger-bg-3"></div>}
      {isOpen && <div className="hambuger-drop-menu-body"></div>}
    </div>
  );
}
