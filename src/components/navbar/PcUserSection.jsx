import React from "react";
import WolfIdentidcon from "../identicon/WolfIdentidcon";

export default function PcUserSection({ valletAccount, balace }) {
  return (
    <div className="wof-pc-drop-container ml-1 mr-[15px]">
      <button className="avatar-zone">
        <WolfIdentidcon size={50} name={valletAccount} />
      </button>
      <div className="wolf-pc-drop-box">
        <div className="user-secttion-header">
          <div className="avatar-section">
            <WolfIdentidcon size={60} name={valletAccount} />
          </div>
          <div className="info-section">
            <h4>Anonimous</h4>
            <h6>
              {valletAccount.substr(0, 10)}...{valletAccount.substr(-8)}
            </h6>
          </div>
        </div>
        {balace && (
          <div className="token-secction">
            <h3>Balance</h3>
            <div className="token-box">
              <div className="flex justify-between items-center">
                <span className="symbol" >ETH</span>
                <span className="value">{Number(balace).toFixed(4)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
