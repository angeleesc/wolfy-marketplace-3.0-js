import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import Logo from "../icons/Logo";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import { MdSearch } from "react-icons/md";
// import

export default function PcNavbar() {
  const location = useLocation();
  const bodyRef = useRef();

  const { pathname } = location;

  const modeExplorerPath = [
    {
      path: staticRoutes.exporersNfts,
    },
    {
      path: staticRoutes.exporersColections,
    },
  ];

  let defBodyClass = useMemo(() => {
    const explorermodePath = matchRoutes(modeExplorerPath, location);
    console.log(explorermodePath);

    if (explorermodePath) {
      console.log("estas en una rua del explorer");
      return "wolf-pc-navbar-body mode-explorer";
    }

    return "wolf-pc-navbar-body";
  }, [pathname]);

  return (
    <div className="wolf-pc-navbar">
      <div className={defBodyClass} ref={bodyRef}>
        <Link
          className="logo-section flex items-center  relative h-[60px]"
          to="/"
        >
          <div className="logo-img">
            <Logo size="60" />
          </div>
          <h1 className="ml-[85px]">Wolf Inu</h1>
        </Link>

        <div className="flex">
          <div className="drop-menu mr-2">
            <Link to={staticRoutes.exporersNfts}>
              <h3>Explorar</h3>
            </Link>
          </div>
          <div className="drop-menu ml-2">
            <Link to={staticRoutes.exporersNfts}>
              <h3>Recursos</h3>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="icon-zone" >
            <h3><MdSearch /></h3>
          </div>
        </div>
      </div>
    </div>
  );
}
