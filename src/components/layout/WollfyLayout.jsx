import React from "react";
import { Outlet } from "react-router-dom";

export default function WollfyLayout({ isProtected, children, rediredTo }) {
  const user = true;

  if (isProtected) {
    if (user) {
      return (
        <div>
          <h3>Menu wolfy logeado</h3>
          { children? children :  <Outlet />}
        </div>
      );
    }

    return <div>
        <h3>Es nesesario logear</h3>
    </div>
  }

  return (
    <div>
      <h3>Menu wolfy</h3>
      { children? children :  <Outlet />}
    </div>
  );
}
