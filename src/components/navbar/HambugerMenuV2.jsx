import React, { useState } from "react";
import MenuGridRounded from "../icons/MenuGridRounded";
import AcordeonMEnu from "./AcordeonMEnu";

export default function HambugerMenuV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExplorerAcordeonMenuOpen, setisExplorerAcordeonMenuOpen] =
    useState(false);

  return (
    <div className="wolf-habuguer-drop-menu">
      <button
        className={`wolf-habuguer-drop-menu-buttom ${
          isOpen ? " h-button-active" : ""
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <MenuGridRounded />
      </button>
      {isOpen && (
        <div
          className="bg-cover"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}

      {isOpen && (
        <div
          className="wolf-habuguer-drop-menu-box"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <AcordeonMEnu title={<span>Explorar</span>}>
            <h3>
              ok xd
            </h3>
          </AcordeonMEnu>
        </div>
      )}
    </div>
  );
}
