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

      if (ordersByUsersX.isSuccess && ordersByUsersX.hasData) {
        const tempJson = {
          colectionName: "Eric Pause Editions",
          seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
          colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
          collectionFace:
            "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
          // sellerFace:
          //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
          isCollectionCheck: true,
          isSellerCheck: true,
          nftCover:
            "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
          // nftVideo: "",
          price: 0.055,
          // saleMethod: saleMethod.sales,
          tokenId: 2670,
          copies: 1,
          sale: 1,
          order: 5,

        };

        const tempNfts = ordersByUsersX.orders.map((nft)=>{

          return{
            ...tempJson,
            ...nft,
            ...(nft.metadata? {nftName: nft.metadata.nftName?  nft.metadata.nftName : "no"}:{nftName: "desconocido"})
          }

        })
        setUserNftsOnMarketPlace(tempNfts);
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
