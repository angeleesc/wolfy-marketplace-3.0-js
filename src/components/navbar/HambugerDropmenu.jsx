import React, { useRef, useState } from "react";
import HabugerMenuLayuot, { HambugerOptionButton } from "./HabugerMenuLayuot";
import MenuGridRounded from "../icons/MenuGridRounded";
import HambugerAcordeonMEnu from "./HambugerAcordeonMEnu";
import {
  FaCompass,
  FaFile,
  FaBars,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import { connetWalletMetamask } from "../../controllers/Web3Controllers";

export default function HambugerDropmenu({ children }) {
  const navigate = useNavigate();

  return (
    <HabugerMenuLayuot icon={<MenuGridRounded />} id={"menu-hamburguesa xd"}>
      <div className="w-[100%] h-[100%] relative">
        <HambugerAcordeonMEnu
          title={
            <>
              <FaCompass className="mr-2" />
              <span>Explorar</span>
            </>
          }
        >
          <HambugerOptionButton
            className="flex items-center"
            onClick={() => {
              navigate(staticRoutes.exporersNfts);
            }}
          >
            <BsArrowReturnRight className="mr-2" />
            <span>Nfts</span>
          </HambugerOptionButton>
          <HambugerOptionButton
            className="flex items-center"
            onClick={() => {
              navigate(staticRoutes.exporersColections);
            }}
          >
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
        <div className="hambuger-login-secction">
          <HambugerOptionButton 
          onClick={()=>{
            connetWalletMetamask()
          }}
          className="w-[100%] wolf-buttom wolf-btn-white">
            <span>Conectar wallet</span>
          </HambugerOptionButton>
          <div className="flex justify-between mt-[12px]">
            <HambugerOptionButton className="social-button">
              <FaFacebook />
            </HambugerOptionButton>
            <HambugerOptionButton className="social-button">
              <FaInstagram />
            </HambugerOptionButton>
            <HambugerOptionButton className="social-button">
              <FaTelegram />
            </HambugerOptionButton>
            <HambugerOptionButton className="social-button">
              <FaDiscord />
            </HambugerOptionButton>
            <HambugerOptionButton className="social-button">
              <FaTwitter />
            </HambugerOptionButton>
          </div>
        </div>
      </div>
    </HabugerMenuLayuot>
  );
}
