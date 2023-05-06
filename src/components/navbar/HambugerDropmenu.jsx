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
import { FaCompass, FaFile } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";

export default function HambugerDropmenu({ children }) {
  return (
    <HabugerMenuLayuot icon={<MenuGridRounded />} id={"menu-hamburguesa xd"}>
      <HambugerAcordeonMEnu
        title={
          <>
            <FaCompass className="mr-2" />
            <span>Explorar</span>
          </>
        }
      >
        <HambugerOptionButton className="flex items-center">
          <BsArrowReturnRight className="mr-2" />
          <span>Nfts</span>
        </HambugerOptionButton>
        <HambugerOptionButton className="flex items-center">
          <BsArrowReturnRight className="mr-2" />
          <span>coleciones</span>
        </HambugerOptionButton>
      </HambugerAcordeonMEnu>
      <HambugerAcordeonMEnu
        title={
          <>
            <FaFile className="mr-2" />
            <span>Recursos</span>
          </>
        }
      >
        <HambugerOptionButton className="flex items-center">
          <BsArrowReturnRight className="mr-2" />
          <span>Sobre Wolfy</span>
        </HambugerOptionButton>
        <HambugerOptionButton className="flex items-center">
          <BsArrowReturnRight className="mr-2" />
          <span>Whitepaper</span>
        </HambugerOptionButton>
        <HambugerOptionButton className="flex items-center">
          <BsArrowReturnRight className="mr-2" />
          <span>Auditoria</span>
        </HambugerOptionButton>
        <HambugerOptionButton className="flex items-center">
          <BsArrowReturnRight className="mr-2" />
          <span>Auditoria 2</span>
        </HambugerOptionButton>
      </HambugerAcordeonMEnu>
    </HabugerMenuLayuot>
  );
}
