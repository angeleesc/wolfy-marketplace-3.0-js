import React from "react";
import "./mobile-navbar-v2.scss";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import HambugerMenuV2 from "./HambugerMenuV2";
import HambuguerUserMenuV2 from "./HambuguerUserMenuV2";

export default function MobileNavbarV2() {
  return (
    <div className="mobile-navbar-v2">
      <Link
        className="logo-section flex items-center  relative h-[60px]"
        to="/"
      >
        <div className="logo-img">
          <Logo size="46" />
        </div>
        <h1 className="ml-2 text-[18px] font-semibold text-wolf-gray-1000">
          Wolf Inu
        </h1>
      </Link>

      <div className="flex">
        <div className="hambuguer-drop-menu-secction">
          <HambuguerUserMenuV2 />
          <HambugerMenuV2 />
        </div>
      </div>
    </div>
  );
}
