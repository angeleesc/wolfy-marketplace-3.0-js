import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNavbar from "../navbar/MobileNavbar";
import PcNavbar from "../navbar/PcNavbar";
import MobileNavbarV2 from "../navbar/MobileNavbarV2";

export default function WollfyLayout({ isProtected, children, rediredTo }) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 800 ? true : false
  );

  const changeMenu = () => {
    console.log(window.innerWidth);
    setIsMobile(window.innerWidth < 800 ? true : false);
    return;
  };

  console.log(isMobile);

  useEffect(() => {
    window.addEventListener("resize", changeMenu);

    return () => {
      window.removeEventListener("resize", changeMenu);
    };
  }, []);

  const user = true;

  if (isProtected) {
    if (user) {
      return (
        <>
          {isMobile === true ? <MobileNavbarV2 /> : <PcNavbar />}
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
      {isMobile === true ? <MobileNavbarV2 /> : <PcNavbar />}
      {children ? children : <Outlet />}
    </>
  );
}
