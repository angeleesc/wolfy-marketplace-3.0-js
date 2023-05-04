import React from "react";

const hambugerMenuContex = React.createContext();

export default function HambugerMenuLayoutV2({ iconElement, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeDrop = () => {
    // setIsOpen(false);
    console.log("modal cerrado");
  };

  return (
    <hambugerMenuContex.Provider value={{}}>
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

const HambuguerMenuOptionButoon = ({ title, onClick, ...props }) => {
  const {} = React.useContext(hambugerMenuContex);

  return (
    <button
      onClick={() => {
        if (onClick && typeof onClick === "function") {
          onClick;
        }
      }}
    >
      {title}
    </button>
  );
};
