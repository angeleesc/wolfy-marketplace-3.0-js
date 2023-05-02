import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import HabugerMenuLayuot from "./HabugerMenuLayuot";
import { useWeb3Context } from "../../context/Web3ContextProvider";

export default function HambugerUserMenu({}) {
  const [isOpen, setIsOpen] = useState(false);

  const { valletAccount, balance, hasWeb3Provider } = useWeb3Context();

  return (
    <HabugerMenuLayuot icon={<FaUserAlt />}>
      <h3>Usuario</h3>
    </HabugerMenuLayuot>
  );
}
