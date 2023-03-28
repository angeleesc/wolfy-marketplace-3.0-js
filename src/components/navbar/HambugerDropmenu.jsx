import React from "react";
import { FaBars } from "react-icons/fa";

export default function HambugerDropmenu({ children }) {
  return (
    <div className="hambuger-drop-menu">
      <button className="hambuger-drop-menu-button">
        <FaBars />
      </button>
      <div className="hambuger-drop-menu-body"></div>
    </div>
  );
}
