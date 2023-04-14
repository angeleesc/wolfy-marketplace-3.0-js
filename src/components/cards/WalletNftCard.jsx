import React from "react";
import "./walllet-card.scss";
import { WolfTooltipNotButton } from "../tooltip/WolfTooltipNotButton";
import WolfTooltip from "../tooltip/WolfTooltip";
import { staticRoutes } from "../../helpers/static-routes";
import { Link } from "react-router-dom";
import { isImageFormatCompatible } from "../../helpers/regEx";

export default function WalletNftCard({ nft }) {
  // descubrimos el formto de la metadad

  // console.log(nft);

  const { collection, collectionName, thumbnails, nftName, nftType } = nft;
  // console.log(thumbnails[0].format);

  const isImageC = isImageFormatCompatible.test(thumbnails[0].format)
    ? true
    : false;

    console.log(isImageC)

  return (
    <div className="nft-card-container">
      <div className="card-body wallet-card">
        <div className="multimedia-secction">
          <div className="avatar-section-container">
            <WolfTooltip
              title={
                <div className="flex flex-col">
                  <span>Collecion</span>
                  <h3>{"colecion"}</h3>
                </div>
              }
              placement="left"
            >
              <WolfTooltipNotButton>
                <div className="avatar-section-item">
                  <Link
                    className="w-[100%] h-[100%] block"
                    to={staticRoutes.colectionInfoData("colection")}
                  >
                    {/* <img src={collectionFace} alt="collection-face-photo" /> */}
                  </Link>
                </div>
              </WolfTooltipNotButton>
            </WolfTooltip>
          </div>
        </div>
        <div className="footer-section"></div>
      </div>
    </div>
  );
}
