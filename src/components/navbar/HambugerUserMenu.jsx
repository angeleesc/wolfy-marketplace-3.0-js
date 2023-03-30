import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import HabugerMenuLayuot from "./HabugerMenuLayuot";

export default function HambugerUserMenu({}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HabugerMenuLayuot icon={<FaUserAlt />}>
      <h3>Usuario</h3>
    </HabugerMenuLayuot>
  );
}
