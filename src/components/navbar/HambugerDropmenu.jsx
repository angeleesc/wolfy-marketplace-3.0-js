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
import useClickOutSideElements from "../../global-hook/useClickOutSideElements";
import { staticRoutes } from "../../helpers/static-routes";
import ArbitrumOficialLogo from "../icons/ArbitrumOficialLogo";
import BinanceOficialLogo from "../icons/BinanceOficialLogo";
import EthereumOficialLogo from "../icons/EthereumOficialLogo";
import OptimismLogon from "../icons/OptimismLogon";
import OptimismOficialLogo from "../icons/OptimismOficialLogo";
import PoligonOficialLogo from "../icons/PoligonOficialLogo";
import HabugerMenuLayuot from "./HabugerMenuLayuot";

export default function HambugerDropmenu({ children }) {
  return (
    <HabugerMenuLayuot icon={<FaBars />}>
      <ul className="habuguer-navabr-section">
        <li>
          <span className="h-title-secction">Explorar</span>
          <ul className="mt-[15px]">
            <li>
              <Link to={staticRoutes.exporersNfts}>NFTS</Link>
            </li>
            <li>
              <Link to={staticRoutes.exporersColections}>Coleciones</Link>
            </li>
            <li>
              <Link to={staticRoutes.exporersColections}>Actividad</Link>
            </li>
            <li>
              <span className="h-title-secction  block mb-4">
                {" "}
                Explorar Por Blockchain
              </span>
              <ul className="flex justify-between blockchain-oprtion">
                <li>
                  <PoligonOficialLogo height="25" width="25" />
                </li>

                <li>
                  <EthereumOficialLogo width="25" height="25" />
                </li>

                <li>
                  <BinanceOficialLogo height="25" width="25" />
                </li>

                <li>
                  <OptimismOficialLogo height="25" width="25" />
                </li>

                <li>
                  <ArbitrumOficialLogo height="25" width="25" />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt-[15px]">
          <span className="h-title-secction">Recursos</span>
          <ul>
            <li>
              <Link to={staticRoutes.exporersNfts}>Whitepaper</Link>
            </li>
            <li>
              <Link to={staticRoutes.exporersNfts}>Auditoria</Link>
            </li>
            <li>
              <Link to={staticRoutes.exporersNfts}>Audotoria 2</Link>
            </li>
            <li>
              <Link to={staticRoutes.exporersNfts}>Sobre Wolfy</Link>
            </li>
            <li>
              <Link to={staticRoutes.exporersNfts}>Anto Rug</Link>
            </li>
          </ul>
        </li>
        <li>
          <span className="h-title-secction">Comunidad</span>
          <ul className=" h-social-section flex justify-between mt-[16px] ">
            <li>
              <button>
                <FaInstagram />
              </button>
            </li>
            <li>
              <button>
                <FaFacebook />
              </button>
            </li>
            <li>
              <button>
                <FaTwitter />
              </button>
            </li>
            <li>
              <button>
                <FaTelegram />
              </button>
            </li>

            <li>
              <button>
                <FaDiscord />
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </HabugerMenuLayuot>
  );
}
