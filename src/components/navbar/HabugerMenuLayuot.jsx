import React, { useEffect, useRef, useState, createContext } from "react";
import useClickOutSideElements from "../../global-hook/useClickOutSideElements";
import { useContext } from "react";

const hambugerMenuContext = createContext();

export default function HabugerMenuLayuot({
  icon,
  children,
  handlerClose,
  id,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  const boxRef = useRef();

  const closeMenu = () => {
    setIsOpen(false);
  };

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

  return (
    <hambugerMenuContext.Provider
      value={{
        ...(id ? { id } : {}),
        constextName: "prueba",
        closeMenu,
      }}
    >
      <div className="hambuger-drop-menu h-menu-active">
        <button
          ref={buttonRef}
          className="hambuger-drop-menu-button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {/* <FaBars /> */}
          {icon ? icon : "?"}
        </button>
        {/* {isOpen && <div className="hambuger-bg-1"></div>} */}
        {/* {isOpen && <div className="hambuger-bg-2"></div>} */}
        {isOpen && (
          <div
            className="hambuger-bg-3"
            onAnimationEnd={(e) => {
              console.log("animacion finalizada");
            }}
          ></div>
        )}

        {isOpen}

        {isOpen && (
          <div className="hambuger-drop-menu-body" ref={boxRef}>
            {children}
          </div>
        )}
      </div>
    </hambugerMenuContext.Provider>
  );
}

export function HambugerOptionButton({ onClick, children, ...props }) {
  const { id, closeMenu } = useContext(hambugerMenuContext);
  console.log(id);

  return (
    <button
      onClick={() => {
        if (onClick && typeof onClick === "function") {
          onClick();
        }
        closeMenu();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
