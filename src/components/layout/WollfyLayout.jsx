import React from "react";
import { Outlet } from "react-router-dom";

export default function WollfyLayout() {
  return (
    <div>
      <h3>Menu wolfy</h3>
      <Outlet />
    </div>
  );
}
