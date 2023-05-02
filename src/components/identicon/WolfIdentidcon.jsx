import React from "react";
import Avatar from "boring-avatars";

export default function WolfIdentidcon({
  size = 30,
  name = "example",
  variant = "bean",
}) {

  

return (
    <Avatar
      size={size}
      name={name}
      variant={variant}
      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
    />
  );
}
