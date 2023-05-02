import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import HabugerMenuLayuot from "./HabugerMenuLayuot";
import { useWeb3Context } from "../../context/Web3ContextProvider";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import { connetWalletMetamask } from "../../controllers/Web3Controllers";
import MetamaskOficialLgo from "../icons/MetamaskOficialLgo";

export default function HambugerUserMenu({}) {
  const [isOpen, setIsOpen] = useState(false);

  const { valletAccount, balance, hasWeb3Provider } = useWeb3Context();

  return (
    <HabugerMenuLayuot
      icon={
        valletAccount ? (
          <WolfIdentidcon size={50} name={valletAccount} />
        ) : (
          <FaUserAlt />
        )
      }
    >
      {valletAccount ? (
        <div>
          <h3>Usuario</h3>
        </div>
      ) : (
        <div className="w-[100%]  max-w-[400px] mt-[20px]">
          <button
            className="wolf-buttom wolf-btn-primary-2 w-[100%] flex items-center justify-center"
            onClick={connetWalletMetamask}
          >
            <MetamaskOficialLgo  className="mr-2" size={30} />
            <span className="text-wolf-gray-light-2200 text-[16px]">
              Conectar Wallet Metamask
            </span>
          </button>
        </div>
      )}
    </HabugerMenuLayuot>
  );
}
