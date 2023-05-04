import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function HambuguerUserMenuV2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wolf-habuguer-drop-menu mx-3">
      <button
        className="wolf-habuguer-drop-menu-buttom"
        onClick={() => {
          // console.log("cliclk xd")
          setIsOpen(!isOpen);
        }}
      >
        <span className="text-[20px]">
          <FaRegUserCircle />
        </span>
      </button>

      {isOpen && <div className="bg-cover"></div>}

      {isOpen && (
        <div
          className="wolf-habuguer-drop-menu-box"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <h3>Menu</h3>
        </div>
      )}
    </div>
  );
}
