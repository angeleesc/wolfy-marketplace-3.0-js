import React from "react";
import { FaPlus, FaSearch, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import HambugerDropmenu from "./HambugerDropmenu";
import "./mobile-navbar.scss";

export default function MobileNavbar() {
  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-body">
        <Link
          className="logo-section flex items-center  relative h-[60px]"
          to="/"
        >
          <div className="logo-img">
            <Logo size="46" />
          </div>
          <h1>Wolf Inu</h1>
        </Link>
        <div className="menu-drop-options">
          <HambugerDropmenu />
        </div>
      </div>
    </div>
  );
}
