import React from "react";
import { FaSearch } from "react-icons/fa";

export default function HambuguerSearchMenu() {
  return (
    <div className="hambuger-drop-menu">
      <button className="hambuger-drop-menu-button">
        <FaSearch />
      </button>
      <div className="hambuger-drop-menu-body"></div>
    </div>
  );
}
