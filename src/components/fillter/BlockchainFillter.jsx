import React, { useRef, useState } from "react";
import useClickOutSideElement from "../../global-hook/useClickOutSideElement";
import "./drop-menu.scss";

const blockChainLisoption = [
  {
    name: "Ethereum",
  },
  { name: "Polygon" },
  { name: "Optimins" },
  { name: "Arbitrum" },
];

export default function BlockchainFillter() {
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
      <button
        className="wolf-buttom drop-menu-button"
        onClick={() => {
          setOpenDrop(!openDrop);
        }}
        ref={activatorLisRef}
      >
        <h3>{currentValue ? currentValue : "Blockchain"}</h3>
      </button>
      {openDrop && (
        <div className="drop-menu-item-xd" ref={dropDownlistRef}>
          <ul>
            {blockChainLisoption.map((blockchain, i) => {
              return (
                <li
                  key={"blockhcainoption-" + i}
                  onClick={() => {
                    console.log("cliccleado", blockchain.name);
                    setCurrentValue(blockchain.name);
                    setOpenDrop(false);
                  }}
                >
                  <h4>{blockchain.name}</h4>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
