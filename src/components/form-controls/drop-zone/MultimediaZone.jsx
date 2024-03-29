import React from "react";
import WolfTooltip from "../../tooltip/WolfTooltip";
import { BiReset } from "react-icons/bi";

export default function MultimediaZone({ value, reset, name }) {
  const { type } = value[0];
  console.log(value);
  // console.log("el tipo recibido es", type);




  if (type.indexOf("image") >= 0) {
    const url = URL.createObjectURL(value[0]);
    // console.log(value);

    return (
      <div className="multimedia-box-container">
        <WolfTooltip title="resetear" arrow>
          <button
            className="reset-button"
            onClick={() => {
              reset(name);
            }}
          >
            <BiReset />
          </button>
        </WolfTooltip>
        <img src={url} alt="prewie-image" />
      </div>
    );
  }
  if (type.indexOf("video") >= 0) {
    return (
      <div className="multimedia-box-container">
        <WolfTooltip title="resetear" arrow>
          <button
            className="reset-button"
            onClick={() => {
              reset(name);
            }}
          >
            <BiReset />
          </button>
        </WolfTooltip>
        <video loop autoPlay muted>
          <source src={URL.createObjectURL(value[0])} type={type}></source>
        </video>
      </div>
    );
  }
  return <h3>desconocido</h3>;
}
