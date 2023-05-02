import React from "react";
import "./mobile-navbar-v2.scss";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";

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
        <h1>Wolf Inu</h1>
      </Link>
    </div>
  );
}
