import React, { useRef, useState } from "react";
import {
  FaBars,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import ArbitrumOficialLogo from "../icons/ArbitrumOficialLogo";
import BinanceOficialLogo from "../icons/BinanceOficialLogo";
import EthereumOficialLogo from "../icons/EthereumOficialLogo";
import OptimismLogon from "../icons/OptimismLogon";
import OptimismOficialLogo from "../icons/OptimismOficialLogo";
import PoligonOficialLogo from "../icons/PoligonOficialLogo";
import HabugerMenuLayuot, { HambugerOptionButton } from "./HabugerMenuLayuot";
import MenuGridRounded from "../icons/MenuGridRounded";
import HambugerAcordeonMEnu from "./HambugerAcordeonMEnu";

export default function HambugerDropmenu({ children }) {
  return (
    <HabugerMenuLayuot icon={<MenuGridRounded />} id={"menu-hamburguesa xd"} >
      <HambugerAcordeonMEnu title={"Explorar"}>
        <HambugerOptionButton>Click XD</HambugerOptionButton>
      </HambugerAcordeonMEnu>
    </HabugerMenuLayuot>
  );
}
