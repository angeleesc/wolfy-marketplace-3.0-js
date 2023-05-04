import React from "react";
import { useState } from "react";

const hambugerMenuContex = React.createContext();

export default function HambugerMenuLayoutV2({ iconElement, children, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeDrop = () => {
    // setIsOpen(false);
    console.log("modal cerrado");
    if (id) {
      console.log(id);
    }
  };

  return (
    <hambugerMenuContex.Provider value={{ closeDrop }}>
      <div className="wolf-habuguer-drop-menu">
        <button
          className="wolf-habuguer-drop-menu-buttom"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {iconElement}
        </button>
        {isOpen && <div className="bg-cover"></div>}

        {isOpen && (
          <div
            className="wolf-habuguer-drop-menu-box"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {children}
          </div>
        )}
      </div>
    </hambugerMenuContex.Provider>
  );
}

export const HambuguerMenuOptionButoon = ({
  title,
  onClick,
  children,
  ...props
}) => {
  const { closeDrop } = React.useContext(hambugerMenuContex);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (onClick && typeof onClick === "function") {
          onClick;
        }
        closeDrop();
      }}
    >
      {children}
    </button>
  );
};
