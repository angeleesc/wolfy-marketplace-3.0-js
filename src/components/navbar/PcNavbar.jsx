import React, { useState } from "react";
import Logo from "../icons/Logo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import { FiCreditCard, FiPlus, FiSearch } from "react-icons/fi";
import Menu from "../icons/Menu";
import WolfTooltip from "../tooltip/WolfTooltip";

export default function PcNavbar() {
  const [openEplorerDpopOption, setopenEplorerDpopOption] = useState(false);

  const uiNavbarInfo = useSelector((state) => state.language.navBar);
  const {
    exporeOptionTextUi,
    createOptionUi,
    resurseOptionUi,
    dropMenuSection,
  } = uiNavbarInfo;
  // console.log(dropMenuSection.exporeOptionTextUi.dorpMenuOptions.NftsTextUi);

  // console.log(uiNavbarInfo);

  return (
    <div className="wolf-pc-navbar">
      <div className="logo">
        <Link to={staticRoutes.root} className="h-[100%] flex items-center">
          <Logo />
          <h3 className="ml-2 text-wolf-gray-950 text-[16px]">Wolf Inu</h3>
        </Link>
      </div>
      <div className="main-option">
        <ul className="wolf-drop-menu-container">
          <li
            className="wolf-drop-down-menu"
            onMouseOver={() => {
              setopenEplorerDpopOption(true);
            }}
            onMouseOut={() => {
              setopenEplorerDpopOption(false);
            }}
          >
            <Link to={staticRoutes.exporersNfts} className="wolf-nav-link">
              {dropMenuSection.exporeOptionTextUi.name}
            </Link>
            {openEplorerDpopOption && (
              <div className="wolf-drop-menu-box">
                <div className="explorer-option">
                  <ul>
                    <li>
                      <Link to="/">
                        {
                          dropMenuSection.exporeOptionTextUi.dorpMenuOptions
                            .NftsTextUi
                        }
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {
                          dropMenuSection.exporeOptionTextUi.dorpMenuOptions
                            .CollectionTextUi
                        }
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="wolf-drop-down-menu">
            <Link to={staticRoutes.resources} className="wolf-nav-link">
              Recursos
            </Link>
          </li>
        </ul>
      </div>
      <div className="main-option">
        <ul className="wolf-drop-menu-container">
          <li>
            <Link to="/" className="wolf-nav-link wolf-nav-link-icon ">
              <WolfTooltip title="Buscar">
                {/* <button> */}
                <FiSearch />
                {/* </button> */}
              </WolfTooltip>
            </Link>
          </li>
          <li>
            <div className="wolf-link-tooptip-container">
              <Link to="/" className="wolf-nav-link wolf-nav-link-icon">
                <FiPlus />
              </Link>
              <div className="wolf-link-toooltip-body" >
                        <span>Crear Nueva Nft</span>
              </div>
            </div>
          </li>
          <li>
            <Link to="/" className="wolf-nav-link wolf-nav-link-icon ">
              <FiCreditCard />
            </Link>
          </li>
          <li>
            <Link to="/" className="wolf-nav-link wolf-nav-link-icon ">
              <Menu />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
