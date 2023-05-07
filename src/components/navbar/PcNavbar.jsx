import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import Logo from "../icons/Logo";
import { Link, matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import { MdSearch } from "react-icons/md";
import { FaSearch, FaPlus, FaUserAlt } from "react-icons/fa";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import WolfTooltip from "../tooltip/WolfTooltip";
import ExplorerDropMenu from "./ExplorerDropMenu";
import ResourceDropMenu from "./ResourceDropMenu";
import {
  checWaletConected,
  connetWalletMetamask,
  getWaletData,
} from "../../controllers/Web3Controllers";
import HabugerMenuLayuot from "./HabugerMenuLayuot";
import { useWeb3Context } from "../../context/Web3ContextProvider";
import PcUserSection from "./PcUserSection";

// import

export default function PcNavbar() {
  // const [valletAccount, setValletAccount] = useState("");
  // const [balance, setBalance] = useState("");

  const { valletAccount, balance } = useWeb3Context();

  const location = useLocation();
  const bodyRef = useRef();

  const { pathname } = location;
  const navigate = useNavigate();

  const modeExplorerPath = [
    {
      path: staticRoutes.exporersNfts,
    },
    {
      path: staticRoutes.exporersColections,
    },
  ];

  //  const profilePath =[
  //   {
  //     // path
  //   }
  //  ]

  let defBodyClass = useMemo(() => {
    const explorermodePath = matchRoutes(modeExplorerPath, location);
    console.log(explorermodePath);

    if (explorermodePath) {
      return "wolf-pc-navbar-body mode-explorer";
    }

    return "wolf-pc-navbar-body";
  }, [pathname]);

  const getWalletAccout = async () => {
    try {
      const isSuccess = await connetWalletMetamask();
      console.log(isSuccess);
    } catch (error) {
      console.log(error);
    }
  };

  const hadlerScroll = (e) => {
    console.log(window.scrollY);
  };

  useEffect(() => {
    // al hacer scroll
    // 1 verificamos si en que ruta esta
    // si esta en la ruta del explorado no hace nada
    // pero si esta en otra ruta cambiara el color de fondo

    window.addEventListener("scroll", hadlerScroll);
    return () => {
      window.removeEventListener("scroll", hadlerScroll)
    };
  }, []);

  return (
    <div className="wolf-pc-navbar">
      <div className={defBodyClass} ref={bodyRef}>
        <Link
          className="logo-section flex items-center  relative h-[60px]"
          to="/"
        >
          <div className="logo-img">
            <Logo size="60" />
          </div>
          <h1 className="ml-[85px]">Wolf Inu</h1>
        </Link>

        <div className="flex">
          <ExplorerDropMenu />
          <ResourceDropMenu />
          <div className="drop-menu-box ml-2">
            <Link to={staticRoutes.exporersNfts}>
              <h3>Actividad</h3>
            </Link>
          </div>
        </div>
        <div className="user-zone">
          <WolfTooltip title="Buscar" arrow>
            <button className="icon-zone mr-2">
              <FaSearch />
            </button>
          </WolfTooltip>
          <WolfTooltip title="crear nueva Nft" arrow>
            <button
              className="icon-zone mx-1"
              onClick={() => {
                navigate(staticRoutes.createNft);
                console.log("navegando");
              }}
            >
              <FaPlus />
            </button>
          </WolfTooltip>

          {valletAccount ? (
            <PcUserSection valletAccount={valletAccount} balace={balance} />
          ) : (
            <WolfTooltip title="iniciar seccion">
              <button
                className="avatar-zone ml-1 mr-[15px]"
                onClick={getWalletAccout}
              >
                <FaUserAlt />
              </button>
            </WolfTooltip>
          )}
        </div>
      </div>
    </div>
  );
}
