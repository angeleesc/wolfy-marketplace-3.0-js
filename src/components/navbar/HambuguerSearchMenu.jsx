import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useClickOutSideElements from "../../global-hook/useClickOutSideElements";

export default function HambuguerSearchMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef();
  const handler = ()=>{
    
  }
  useClickOutSideElements(handler);



  return (
    <div className="hambuger-drop-menu h-menu-active">
      <button
        ref={buttonRef}
        className="hambuger-drop-menu-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FaSearch />
      </button>
      {isOpen && <div className="hambuger-bg-1"></div>}
      {isOpen && <div className="hambuger-bg-2"></div>}
      {isOpen && <div className="hambuger-bg-3"></div>}
      {isOpen && <div className="hambuger-drop-menu-body"></div>}
    </div>
  );
}
