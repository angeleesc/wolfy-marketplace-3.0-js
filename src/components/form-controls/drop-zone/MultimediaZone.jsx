import React from "react";
import { isVideoFileRegEx } from "../../../helpers/regEx";

export default function MultimediaZone({ value }) {
  const { type } = value[0];
  console.log("el tipo recibido es", type);

  if (type==="video/mp4") return <div>es un video</div>;

  return <h3>desconocido</h3>;
}
