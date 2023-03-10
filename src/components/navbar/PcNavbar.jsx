import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import Logo from "../icons/Logo";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";

export default function PcNavbar() {
  const routes = useLocation();
  const bodyRef = useRef();

  useEffect(() => {
    if (bodyRef.current) {
      console.log(bodyRef.current.classList);
    }
  }, []);

  return (
    <div className="wolf-pc-navbar">
      <div className="wolf-pc-navbar-body mode-explorer" ref={bodyRef}>
        <Link
          className="logo-section flex items-center  relative h-[60px]"
          to="/"
        >
          <div className="logo-img">
            <Logo size="60" />
          </div>
          <h1 className="ml-[85px]">Wolf Inu</h1>
        </Link>
      </div>
    </div>
  );
}
