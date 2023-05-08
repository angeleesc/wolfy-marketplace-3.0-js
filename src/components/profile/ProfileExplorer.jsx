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
import { getNftsByWallet } from "../../controllers/alchemyController";
import worderin from "../../static-images/wondering.png";

export default function ProfileExplorer() {
  const { id } = useParams();
  const [userNftsOnMarketPlace, setUserNftsOnMarketPlace] = useState([]);
  const [userNftsOnWallet, setUserNftsOnWallet] = useState([]);
  const [loadind, setLoadind] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [setLastRefIdNftsOnWallet, setSetLastRefIdNftsOnWallet] = useState("");

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

    if (mode) {
      console.log("modo", mode);

      if (mode === "wallet") {
        console.log("obteniondo las nfts del usuario sede la wallet");
        const data = await getNftsByWallet(id);
        setUserNftsOnWallet(data.nfts);
        if (data.pageKey) setSetLastRefIdNftsOnWallet(data.pageKey);
        return;
      }

      if (mode === "myAuctionsBid") {
        console.log("obteniendo las subasta donde estas haciendo oferta");
        return;
      }
    }

    const tempData = {
      colectionName: "Eric Pause Editions",
      colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
      isCollectionCheck: true,
      isSellerCheck: true,
      nftCover:
        "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
      price: 0.055,
      saleMethod: saleMethod.sales,
      tokenId: 2670,
      copies: 1,
      sale: 1,
      order: 5,
    };

    const ordesByUsers = await getOrdersByWalletAddres(id, {});

    if (ordesByUsers.isSuccess && ordesByUsers.hasData) {
      const dataToSend = ordesByUsers.orders.map((orderData) => {
        let nftCover;

        if (orderData) {
          nftCover = {
            ...(orderData.metadata && orderData.metadata.nftName
              ? { nftName: orderData.metadata.nftName }
              : { nftName: "desconocido" }),
            ...(orderData.metadata && orderData.metadata.thumbnail
              ? { nftCover: orderData.metadata.thumbnail }
              : orderData.metadata.image
              ? { nftCover: orderData.metadata.image }
              : { nftCover: worderin }),
            ...(orderData.metadata && orderData.metadata.contractType
              ? { contractType: orderData.metadata.contractType }
              : {}),
            ...(orderData.endTime ? { endTime: orderData.endTime } : {}),
            price: orderData.price,
            colection: orderData.colection,
            sale: orderData.onSale,
            onSale: orderData.onSale,
            orderId: orderData.orderId,
            seller: orderData.seller,
            listingAt: orderData.listingAt,
            currentPrice: orderData.currentPrice,
            ...(orderData.sellerName
              ? { sellerName: orderData.sellerName }
              : {}),
            saleMethod: orderData.saleMethod,
            ...(orderData.collectionFace
              ? { collectionFace: orderData.collectionFace }
              : {}),
          };
        }

        return {
          ...tempData,
          ...nftCover,
          ...(walletLog ? { walletLog } : {}),
        };
      });

      console.log("datos para enviar");
      // console.log(dataToSend)
      setUserNftsOnMarketPlace(dataToSend);
    }

    // console.log(ordesByUsers);
    // seguidamente se obtine las nft segun el mosdo en esta caso hay dos modos los que estan dentro de la marketpplace y los que estan dentro de su billetera
  };

  useEffect(() => {
    initt();
  }, [mode]);

  return (
    <div className="mt-[30px] px-[30px] min-[700px]:px-[30px] profile-explorer-box">
      <ProfileExplorerMenu setMode={setSearchParams} mode={mode} />
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
