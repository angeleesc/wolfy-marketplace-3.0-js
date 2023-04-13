import React, { useState } from "react";
import ProfileExplorerMenu from "../menus/ProfileExplorerMenu";
import { useParams, useSearchParams } from "react-router-dom";
import {
  checWaletConected,
  checkIsEqualAddres,
  getWaletData,
} from "../../controllers/Web3Controllers";
import { useEffect } from "react";
import UserCardList from "../list/UserCardList";
import UserWalletCardList from "../list/UserWalletCardList";
import { getOrdersByWalletAddres } from "../../controllers/firebaseControllers";
import { saleMethod } from "../../helpers/global-constants";

export default function ProfileExplorer() {
  const { id } = useParams();
  const [userNftsOnMarketPlace, setUserNftsOnMarketPlace] = useState([]);
  const [userNftsOnWallet, setUserNftsOnWallet] = useState([]);
  const [loadind, setLoadind] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [walletAddres, setWalletAddres] = useState("");

  const mode = searchParams.get("mode");
  const type = searchParams.get("type");

  const initt = async () => {
    console.log("iniciando");

    // verificamos si el usuario estas conectado esto los hacemos para madarle la informacion a los compoenetes encargados de la nft

    let walletLog = null;

    const checkWalletConected = await checWaletConected();
    if (checkWalletConected === true) {
      const walletData = await getWaletData();
      walletLog = walletData.addres;
    }

    if(mode){
      console.log("obteniondo las nfts del usuario sede la wallet")
      
      return
    }

    const tempData = {
      // nftName: "Eric Way ",
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
      saleMethod: saleMethod.sales,
      tokenId: 2670,
      copies: 1,
      sale: 1,
      order: 5,
    };




    const ordesByUsers = await getOrdersByWalletAddres(id, {});

    // console.log(ordesByUsers)

    if (ordesByUsers.isSuccess && ordesByUsers.hasData) {
      const dataToSend = ordesByUsers.orders.map((orderData) => {
        return {
          ...tempData,
          ...orderData,
          ...(orderData.metadata
            ? {
                nftName: orderData.metadata.nftName
                  ? orderData.metadata.nftName
                  : "no",
              }
            : { nftName: "desconocido" }),
          ...(walletLog ? { walletLog } : {}),
        };
      });

      console.log("datos para enviar")
      // console.log(dataToSend)
      setUserNftsOnMarketPlace(dataToSend)

    }


    // console.log(ordesByUsers);

    // seguidamente se obtine las nft segun el mosdo en esta caso hay dos modos los que estan dentro de la marketpplace y los que estan dentro de su billetera
  };

  useEffect(() => {
    initt();
  }, [mode]);

  return (
    <div className="mt-[30px] px-[30px] min-[700px]:px-[60px] profile-explorer-box">
      <ProfileExplorerMenu />
      {!mode ? (
        <div className="mb-80px">
          <UserCardList nfts={userNftsOnMarketPlace} />
        </div>
      ) : (
        <UserWalletCardList nfts={userNftsOnWallet} />
      )}
    </div>
  );
}
