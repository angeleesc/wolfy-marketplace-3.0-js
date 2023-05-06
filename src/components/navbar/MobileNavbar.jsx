import React from "react";
import { FaPlus, FaSearch, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import HambugerDropmenu from "./HambugerDropmenu";
import HambugerUserMenu from "./HambugerUserMenu";
import HambuguerSearchMenu from "./HambuguerSearchMenu";
import "./mobile-navbar.scss";
import { useWeb3Context } from "../../context/Web3ContextProvider";

export default function MobileNavbar() {
  const { valletAccount } = useWeb3Context();

  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-body">
        <Link className="logo-section flex items-center" to="/">
          <div className="logo-img">
            <Logo size="42" />
          </div>
          <h1>Wolf Inu</h1>
        </Link>
        <div className="menu-drop-sections">
          <HambuguerSearchMenu />
          {valletAccount && <HambugerUserMenu />}
          <HambugerDropmenu />
        </div>
      </div>
    </div>
  );
}
