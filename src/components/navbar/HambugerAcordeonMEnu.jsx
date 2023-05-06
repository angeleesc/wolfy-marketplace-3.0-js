import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function HambugerAcordeonMEnu({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wolfy-hambuger-acordeon-menu-container">
      <button className="acordeon-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <div className="acordeon-menu-btn-title">
          <span className="flex items-center">{title}</span>
        </div>
        <div className="acordeon-menu-chevron">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      {isOpen && <div className="acordeon-menu-box">{children}</div>}
    </div>
  );
}
