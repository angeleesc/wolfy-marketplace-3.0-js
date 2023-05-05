import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AcordeonMEnu({ title, children }) {
  const [isOPen, setIsOPen] = useState(false);

  return (
    <div className="wofl-acordeon-menu" onClick={(e)=>{
        e.stopPropagation()
    }} >
      <button
        onClick={() => {
          setIsOPen(!isOPen);
        }}
        className={ isOPen?  "wolf-acordeon-buton wolf-acordeon-button-active":  "wolf-acordeon-buton"}
        
      >
        {title}
      </button>
      {isOPen && <div className="wolf-acordeon-box">
        {/* <h3>Ok xd</h3> */}
        {children}
        </div>}
    </div>
  );
}

export const AcordeonLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? "wolf-acordeon-link w-a-pedding"
          : isActive
          ? "wolf-acordeon-link w-a-active"
          : "wolf-acordeon-link"
      }
    >
      {children}
    </NavLink>
  );
};
