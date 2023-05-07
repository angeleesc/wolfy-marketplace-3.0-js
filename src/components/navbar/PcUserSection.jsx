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
          XD
          {/* <div className="avatar-zone">
            <WolfIdentidcon size={30} name={valletAccount} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
