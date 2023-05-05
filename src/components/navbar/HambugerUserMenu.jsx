import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import HabugerMenuLayuot, { HambugerOptionButton } from "./HabugerMenuLayuot";
import { useWeb3Context } from "../../context/Web3ContextProvider";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import { connetWalletMetamask } from "../../controllers/Web3Controllers";
import MetamaskOficialLgo from "../icons/MetamaskOficialLgo";
import { BiUserCircle } from "react-icons/bi";


export default function HambugerUserMenu({}) {
  const { valletAccount, balance, hasWeb3Provider } = useWeb3Context();

  return (
    <HabugerMenuLayuot
      icon={
        valletAccount ? (
          <WolfIdentidcon size={24} name={valletAccount} />
        ) : (
          <BiUserCircle />
        )
      }
      handlerClose={(func) => {
        setCloseDrop(func);
      }}
    >
      {valletAccount ? (
        <>
          <h3>Usuario</h3>
        </>
      ) : (
        <div className="w-[100%]  max-w-[400px] mt-[20px]">
          <HambugerOptionButton
            className="wolf-buttom wolf-btn-primary-2 w-[100%] flex items-center justify-center"
            data-closedrop="true"
            onClick={async () => {
              connetWalletMetamask();
            }}
          >
            <MetamaskOficialLgo
              className="mr-2"
              size={30}
              data-closedrop="true"
            />
            <span
              className="text-wolf-gray-light-2200 text-[16px]"
              data-closedrop="true"
            >
              Conectar Wallet Metamask
            </span>
          </HambugerOptionButton>
        </div>
      )}
    </HabugerMenuLayuot>
  );
}
