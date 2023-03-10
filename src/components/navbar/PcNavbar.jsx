import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../icons/Logo";

export default function PcNavbar() {
  const [openEplorerDpopOption, setopenEplorerDpopOption] = useState(false);
  const [createNftDrop, setCreateNftDrop] = useState(false);

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
      <div className="wolf-pc-navbar-body">
        <div className="flex items-center bg-slate-500 relative h-[100%]">
          <div className="logo-img">
            <Logo size="60" />
          </div>
          <h1 className="ml-[70px]">Wolf Inu</h1>
        </div>
      </div>
    </div>
  );
}
