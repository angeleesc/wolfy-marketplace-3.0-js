import React from "react";
import { FaSearch } from "react-icons/fa";


export default function HambugerSearchMenu() {
  return (
    <div className="wolf-habuguer-drop-menu">
      <button className="wolf-habuguer-drop-menu-buttom">
        <span className="text-[20px]">
          <FaSearch />
        </span>
      </button>
    </div>
  );
}
