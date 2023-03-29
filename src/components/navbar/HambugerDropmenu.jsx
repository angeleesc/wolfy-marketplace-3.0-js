import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import useClickOutSideElements from "../../global-hook/useClickOutSideElements";
import { staticRoutes } from "../../helpers/static-routes";
import HabugerMenuLayuot from "./HabugerMenuLayuot";

export default function HambugerDropmenu({ children }) {
  return (
    <HabugerMenuLayuot icon={<FaBars />}>
      <ul className="habuguer-navabr-section" >
        <li>
          <span>Explorar</span>
          <ul>
            <li>
              <Link to={staticRoutes.exporersNfts} >NFTS</Link>
              <Link to={staticRoutes.exporersColections} >Coleciones</Link>
            </li>
            <li>
              <span>Por Blockchain</span>
            </li>
          </ul>
        </li>
        <li>
          <span></span>
        </li>
    
      </ul>
    </HabugerMenuLayuot>
  );
}
