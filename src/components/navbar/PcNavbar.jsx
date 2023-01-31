import React from "react";
import Logo from "../icons/Logo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import { FiCreditCard, FiPlus, FiSearch } from "react-icons/fi";
import Menu from "../icons/Menu";

export default function PcNavbar() {
  const uiNavbarInfo = useSelector((state) => state.language.navBar);
  const { exporeOptionTextUi, createOptionUi, resurseOptionUi } = uiNavbarInfo;

  console.log(uiNavbarInfo);

  return (
    <div className="wolf-pc-navbar">
      <div className="logo">
        <Link
          to={staticRoutes.root}
          className="h-[100%] flex items-center"
        >
          <Logo />
          <h3 className="ml-2 text-wolf-gray-950 text-[16px]">Wolf Inu</h3>
        </Link>
      </div>
      <div className="main-option">
        <ul className="wolf-drop-menu-container">
          <li>
            <Link to={staticRoutes.exporersNfts} className="wolf-nav-link">
              {exporeOptionTextUi}
            </Link>
          </li>
          <li>
            <Link to={staticRoutes.resources} className="wolf-nav-link">
              Recursos
            </Link>
          </li>
        </ul>
      </div>
      <div className="main-option">
        <ul className="wolf-drop-menu-container">
          <li>
            <Link to="/" className="wolf-nav-link wolf-nav-link-icon ">
              <FiSearch />
            </Link>
          </li>
          <li>
            <Link to="/" className="wolf-nav-link wolf-nav-link-icon">
              <FiPlus />
            </Link>
          </li>
          <li>
            <Link to="/" className="wolf-nav-link wolf-nav-link-icon ">
              <FiCreditCard />
            </Link>
          </li>
          <li>
            <Link to="/" className="wolf-nav-link wolf-nav-link-icon ">
              <Menu />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
