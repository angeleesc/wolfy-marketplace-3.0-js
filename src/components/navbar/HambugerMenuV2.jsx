import React, { useState } from "react";
import MenuGridRounded from "../icons/MenuGridRounded";
import HambugerMenuLayoutV2, {
  HambuguerMenuOptionButoon,
} from "./HambugerMenuLayoutV2";

export default function HambugerMenuV2() {
  const [isOpen, setIsOpen] = useState(true);

  // <MenuGridRounded size={"20"} />

  return (
    <HambugerMenuLayoutV2
      iconElement={<MenuGridRounded size={"20"} />}
      id={"wolfy-hambuger-menu"}
    >
      <h3>Seccion de menu</h3>
      <HambuguerMenuOptionButoon>Click XD</HambuguerMenuOptionButoon>
    </HambugerMenuLayoutV2>
  );
}
