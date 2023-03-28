import React from "react";
import { FaUserAlt } from "react-icons/fa";

export default function HambugerUserMenu({}) {
  return (
    <div className="hambuger-drop-menu">
      <button className="hambuger-drop-menu-button">
        <FaUserAlt />
      </button>
      <div className="hambuger-drop-menu-body"></div>
    </div>
  );
}
