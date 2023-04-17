import React from "react";
import "./explorer-menu-profile.scss";

export default function ProfileExplorerMenu({ setMode }) {
  return (
    <div className="profile-menu mb-[15px]">
      <div className="nfts-section">
        <button
          onClick={() => {
            setMode({});
          }}
        >
          Marketplace
        </button>
        <button
        onClick={()=>{
          setMode({
            mode:"wallet"
          })
        }}
        >walllet</button>
      </div>
    </div>
  );
}
