import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function HambugerAcordeonMEnu({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wolfy-hambuger-acordeon-menu-container">
      <button className="acordeon-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <div className="acordeon-menu-btn-title">
          <span>{title}</span>
        </div>
        <div className="acordeon-menu-chevron">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
    </div>
  );
}
