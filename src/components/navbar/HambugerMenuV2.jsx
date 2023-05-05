import React, { useState } from "react";
import MenuGridRounded from "../icons/MenuGridRounded";
import HambugerMenuLayoutV2, {
  HambuguerMenuOptionButoon,
} from "./HambugerMenuLayoutV2";
import { useContext } from "react";
import AcordeonMEnu from "./AcordeonMEnu";

export default function HambugerMenuV2() {
  const [isOpen, setIsOpen] = useState(false);

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
            <h4>XD vamo</h4>
          </AcordeonMEnu>
        </div>
      )}
    </div>
  );
}
