import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

export default function HambugerUserMenu({}) {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="hambuger-drop-menu">
      <button className="hambuger-drop-menu-button">
        <FaUserAlt />
      </button>
      {isOpen && <div className="hambuger-bg-1"></div>}
      {isOpen && <div className="hambuger-bg-2"></div>}
      {isOpen && <div className="hambuger-bg-3"></div>}
      {isOpen && <div className="hambuger-drop-menu-body"></div>}
    </div>
  );
}
