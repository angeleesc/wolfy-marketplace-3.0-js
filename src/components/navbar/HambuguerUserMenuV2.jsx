import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function HambuguerUserMenuV2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wolf-habuguer-drop-menu mx-3">
      <button
        className="wolf-habuguer-drop-menu-buttom"
        onClick={() => {
    console.log("cliclk xd")
        }}
      >
        <span className="text-[20px]">
          <FaRegUserCircle />
        </span>
      </button>

      {isOpen && (
        <div
          className="wolf-habuguer-drop-menu-box"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <h3>Menu</h3>
          <div className="bg-cover"></div>
        </div>
      )}
    </div>
  );
}
