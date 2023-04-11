import React from "react";
import ProfileExplorerMenu from "../menus/ProfileExplorerMenu";
import { useParams } from "react-router-dom";
import { checWaletConected, getWaletData } from "../../controllers/Web3Controllers";
import { useEffect } from "react";

export default function ProfileExplorer() {
  const {id} = useParams();
  


  /// el pat del usuario

  const initt = async () => {

    const checkWalletConected = await checWaletConected()
    if(checkWalletConected){
      const walletData = await getWaletData()
      console.log(walletData.addres)
      if(walletData.addres === id){
        console.log("son el mismo id")
      }
    }

  };

  useEffect(()=>{

    initt()

  },[])

  return (
    <div className="mt-[30px] px-[30px] min-[700px]:px-[60px] profile-explorer-box">
      <ProfileExplorerMenu />
    </div>
  );
}
