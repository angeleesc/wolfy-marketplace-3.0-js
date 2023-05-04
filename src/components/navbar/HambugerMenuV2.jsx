import React, { useState } from "react";
import MenuGridRounded from "../icons/MenuGridRounded";
import HambugerMenuLayoutV2, {
  HambuguerMenuOptionButoon,
} from "./HambugerMenuLayoutV2";
import { useContext } from "react";

export default function HambugerMenuV2() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="wolf-habuguer-drop-menu">
    <button

      className={`wolf-habuguer-drop-menu-buttom ${isOpen? " h-button-active": ""}`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <MenuGridRounded/>
    </button>
    {isOpen && <div className="bg-cover"></div>}

    {isOpen && (
      <div

        className="wolf-habuguer-drop-menu-box"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <h3>XD</h3>
      </div>
    )}
  </div>

  );
}
