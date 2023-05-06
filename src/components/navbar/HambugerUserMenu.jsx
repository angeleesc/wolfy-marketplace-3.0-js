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
        <div className="user-section">
          <div className="user-secction-header">
            <WolfIdentidcon size={90} name={valletAccount} />
            <div className="user-name-secction">
              <h3>Anonimous</h3>
              <h5>
                {valletAccount.substr(0, 10)}...{valletAccount.substr(-8)}{" "}
              </h5>
              <span className="balance">{Number(balance).toFixed(4)} ETH</span>
            </div>
          </div>
          <div className="mt-[15px] w-[100%]">
            <HambugerOptionButton className="wolf-buttom wolf-btn-secondary w-[100%]">
              Crear Nfts
            </HambugerOptionButton>
          </div>
        </div>
      ) : (
        <div className="w-[100%]  max-w-[400px] mt-[20px]">
          <HambugerOptionButton
            className="wolf-buttom wolf-btn-primary-2 w-[100%] flex items-center justify-center "
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
