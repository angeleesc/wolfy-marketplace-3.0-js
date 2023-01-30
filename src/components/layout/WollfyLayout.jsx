import React from "react";
import { Outlet } from "react-router-dom";
import PcNavbar from "../navbar/PcNavbar";

export default function WollfyLayout({ isProtected, children, rediredTo }) {
  const user = true;

  if (isProtected) {
    if (user) {
      return (
        <>
          <PcNavbar />
          {children ? children : <Outlet />}
        </>
      );
    }

    return (
      <div>
        <h3>Es nesesario logear</h3>
      </div>
    );
  }

  return (
    <>
      <PcNavbar />
      {children ? children : <Outlet />}
    </>
  );
}
