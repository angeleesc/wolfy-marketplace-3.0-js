import React, { useRef, useState } from "react";
import useClickOutSideElement from "../../global-hook/useClickOutSideElement";
import "./drop-menu.scss";

export default function DropMenuOptionFillter({ nameDafault, label, optioms }) {
  const [openDrop, setOpenDrop] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const activatorLisRef = useRef();
  const dropDownlistRef = useRef();

  const closeDropMenu = (e) => {
    setOpenDrop(false);
  };

  useClickOutSideElement(activatorLisRef, closeDropMenu, dropDownlistRef);

  return (
    <div className="drop-menu-container">
      <span className="text-[16px] text-wolf-gray-light-1200 mb-2">
        {label || "Label?"}
      </span>
      <button
        className="wolf-buttom drop-menu-button"
        onClick={() => {
          setOpenDrop(!openDrop);
        }}
        ref={activatorLisRef}
      >
        <h3>{currentValue ? currentValue : nameDafault || "none"}</h3>
      </button>
      {openDrop && (
        <div className="drop-menu-item-xd" ref={dropDownlistRef}>
          <ul>
            {optioms.map((options, i) => {
              return (
                <li
                  key={"blockhcainoption-" + i}
                  onClick={() => {
                    console.log("cliccleado", options.name);
                    setCurrentValue(options.name);
                    setOpenDrop(false);
                  }}
                >
                  <h4>{options.name}</h4>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
