import React from "react";
import "./explorer-menu-profile.scss";

export default function ProfileExplorerMenu({ setMode, mode }) {
  return (
    <div className="profile-menu mb-[15px]">
      <div className="nfts-section">
        <button
          className="wolf-buttom wolf-btn-secondary-traparent"
          onClick={() => {
            setMode({});
          }}
        >
          Marketplace
        </button>
        <button
          className="wolf-buttom wolf-btn-secondary-traparent"
          onClick={() => {
            setMode({
              mode: "wallet",
            });
          }}
        >
          walllet
        </button>
        <button
          className="wolf-buttom wolf-btn-secondary-traparent"
          onClick={() => {
            setMode({
              mode: "myAuctionsBid",
            });
          }}
        >
          Ofertas Hechas
        </button>
      </div>
    </div>
  );
}
