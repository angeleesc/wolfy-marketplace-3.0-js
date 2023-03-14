import React from "react";
import { isVideoFileRegEx } from "../../../helpers/regEx";

export default function MultimediaZone({ value }) {
  const { type } = value[0];
  console.log("el tipo recibido es", type);
  const typeV = /video/;
  const typeI = /image/;

  // if (type==="video/mp4") return <div>es un video</div>;
  // if(ind)
  if (type.indexOf("image") >= 0) return <h3>es una imagen</h3>;
  if (type.indexOf("video") >= 0) return <h3>es un video</h3>;
  return <h3>desconocido</h3>;
}
