import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import HambugerMenuLayoutV2, {
  HambuguerMenuOptionButoon,
} from "./HambugerMenuLayoutV2";

export default function HambuguerUserMenuV2() {
  const [isOpen, setIsOpen] = useState(false);
  // <FaRegUserCircle />

  return (
    <HambugerMenuLayoutV2
      id={"hambugre-menu-user"}
      iconElement={<FaRegUserCircle />}
    >
      <HambuguerMenuOptionButoon>usuario xd</HambuguerMenuOptionButoon>
    </HambugerMenuLayoutV2>
  );
}
