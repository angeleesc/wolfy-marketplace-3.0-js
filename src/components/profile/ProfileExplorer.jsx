import React, { useState } from "react";
import ProfileExplorerMenu from "../menus/ProfileExplorerMenu";
import { useParams, useSearchParams } from "react-router-dom";
import {
  checWaletConected,
  getWaletData,
} from "../../controllers/Web3Controllers";
import { useEffect } from "react";
import UserCardList from "../list/UserCardList";
import UserWalletCardList from "../list/UserWalletCardList";
import { getOrdersByWalletAddres } from "../../controllers/firebaseControllers";

export default function ProfileExplorer() {
  const { id } = useParams();
  const [userNftsOnMarketPlace, setUserNftsOnMarketPlace] = useState([]);
  const [userNftsOnWallet, setUserNftsOnWallet] = useState([]);
  const [isWalletUser, setIsWalletUser] = useState(false);
  const [loadind, setLoadind] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get("mode");
  const type = searchParams.get("type");

  const initt = async () => {
    const checkWalletConected = await checWaletConected();

    // verificamos si el usuario es el mismo de la wallet si es el mismo se indica

    if (checkWalletConected && checWaletConected !== "notBlockchain") {
      const walletData = await getWaletData();
      console.log(walletData.addres);
      if (walletData.addres === id) {
        setIsWalletUser(true);
      }

      if (mode) {
        console.log("obtenemos los datos de la walet");
        return;
      }
      console.log("obtenemos las nfts de la marketplace");

      const ordersByUsersX = await getOrdersByWalletAddres(id, {});

      // console.log(ordersByUsersX)


      if(ordersByUsersX.isSuccess && ordersByUsersX.hasData ){
        setUserNftsOnMarketPlace(ordersByUsersX.orders)
      }


    }

    // seguidamente se obtine las nft segun el mosdo en esta caso hay dos modos los que estan dentro de la marketpplace y los que estan dentro de su billetera
  };

  useEffect(() => {
    initt();
  }, [mode]);

  return (
    <div className="mt-[30px] px-[30px] min-[700px]:px-[60px] profile-explorer-box">
      <ProfileExplorerMenu />
      {!mode ? (
        <UserCardList nfts={userNftsOnMarketPlace} />
      ) : (
        <UserWalletCardList nfts={userNftsOnWallet} />
      )}
    </div>
  );
}
