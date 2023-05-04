import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const hambugerMenuContex = React.createContext();

export default function HambugerMenuLayoutV2({ iconElement, children, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef();
  const boxRef = useRef();

  const handler = (e) => {
    // setIsOpen(false);

    const el1 = buttonRef.current;
    const el2 = boxRef.current;

    if (el1 && el2) {
      console.log("el elemento exite");

      if (el1.contains(e.target) || el2.contains(e.target)) {
        console.log("estas dentro del elemnto");

        if (el2.contains(e.target)) {
          // setIsOpen(false);
        }

        return;
      }

      console.log("estas fuera del elemento");
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const closeDrop = () => {
    // setIsOpen(false);
    setIsOpen(false);
    console.log("modal cerrado");
    if (id) {
      console.log(id);
    }
    console.log(":si se cerro");
  };

  return (
    <hambugerMenuContex.Provider value={{ closeDrop }}>
      <div className="wolf-habuguer-drop-menu">
        <button
          ref={buttonRef}
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
            ref={boxRef}
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
      {...props}
    >
      {children}
    </button>
  );
};

export const useHambugerContext = () => {
  const context = React.useContext(hambugerMenuContex);
  console.log(context);
  return context;
};
