import React from "react";
import Logo from "../icons/Logo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";

export default function PcNavbar() {
  const uiNavbarInfo = useSelector((state) => state.language.navBar);
  const { exporeOptionTextUi, createOptionUi, resurseOptionUi } = uiNavbarInfo;

  console.log(uiNavbarInfo);

  return (
    <div className="wolf-pc-navbar">
      <div className="logo">
        <Link
          to={staticRoutes.root}
          className="h-[100%] bg-slate-600 flex items-center"
        >
          <Logo />
          <h3 className="ml-2 text-wolf-gray-950">Wolf Inu</h3>
        </Link>
      </div>
      <div className="main-option">
        <ul className="wolf-drop-menu-container">
          <li>
            <Link to={staticRoutes.exporersNfts}>{exporeOptionTextUi}</Link>
          </li>
          <li>
            <Link to={staticRoutes.resources}>Recursos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
