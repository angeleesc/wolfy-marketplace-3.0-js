import React, { useState } from "react";
import MenuGridRounded from "../icons/MenuGridRounded";

export default function HambugerMenuV2() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="wolf-habuguer-drop-menu">
      <button
        className="wolf-habuguer-drop-menu-buttom"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <MenuGridRounded size={"20"} />
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
