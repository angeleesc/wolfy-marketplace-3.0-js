import React from "react";
import Avatar from "boring-avatars";
import {
  getHash,
  hslAnalogoAdobeColor,
  hslToHex,
} from "./controller/hashControllers";

export default function WolfIdentidcon({
  size = 30,
  name = "example",
  variant = "bean",
}) {
  const hash = getHash(name);
  const palete = hslAnalogoAdobeColor(hash);

  // console.log("paleta XD");
  // console.log(palete);

  const colors = [];

  for (let paleteKey in palete) {
    const color = hslToHex(...palete[paleteKey]);
    colors.push(color);
  }
  // console.log(colors);

  return <Avatar size={size} name={name} variant={variant} colors={colors} />;
}
