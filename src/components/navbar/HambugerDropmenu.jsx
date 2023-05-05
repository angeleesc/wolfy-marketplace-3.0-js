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
import HabugerMenuLayuot from "./HabugerMenuLayuot";
import MenuGridRounded from "../icons/MenuGridRounded";

export default function HambugerDropmenu({ children }) {
  return (
    <HabugerMenuLayuot icon={<MenuGridRounded />}>
  
    

    </HabugerMenuLayuot>
  );
}
