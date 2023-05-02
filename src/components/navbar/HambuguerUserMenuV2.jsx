import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function HambuguerUserMenuV2() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="wolf-habuguer-drop-menu mx-3">
      <button className="wolf-habuguer-drop-menu-buttom">
        <span className="text-[20px]">
          <FaRegUserCircle />
        </span>
      </button>


      {isOpen && (
        <div className="wolf-habuguer-drop-menu-box">
          <h3>Menu</h3>
          <div className="bg-cover"></div>
        </div>
      )}
    </div>
  );
}
