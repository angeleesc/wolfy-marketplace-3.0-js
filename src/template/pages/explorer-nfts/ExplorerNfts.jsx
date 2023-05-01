import React, { useEffect, useState } from "react";
import { saleMethod } from "../../../helpers/global-constants";
import NftsCardList from "../../../components/list/NftsCardList";
import ExplorerMenuFillter from "../../../components/menus/ExplorerMenuFillter";
import { useSearchParams } from "react-router-dom";
import { getOdres } from "../../../controllers/firebaseControllers";
import worderin from "../../../static-images/wondering.png";
import {
  checWaletConected,
  getProviderByJsonRpc,
  getWaletData,
} from "../../../controllers/Web3Controllers";

export default function ExplorerNfts() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [orders, setOrders] = useState([]);

  const filleterData = {
    ...(searchParams.get("sortBy")
      ? { sortBy: searchParams.get("sortBy") }
      : {}),
  };

  const tempJsonObjet = {
    colectionName: "Eric Pause Editions",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover: worderin,
    saleMethod: saleMethod.sales,
    copies: 1,
    sale: 1,
    order: 5,
  };

  const getAllOrders = async () => {
    const result = await getOdres({});
    let walletLog = null;

    console.log("obteniendo el provider");
    const provider = await getProviderByJsonRpc();

    const checkWalletConected = await checWaletConected();
    if (checkWalletConected === true) {
      const walletData = await getWaletData();
      walletLog = walletData.addres;
    }

    if (result.isSuccess && result.hasData) {
      // console.log(result.orders);

      const resultReturned = result.orders.map((orderData) => {
        let nftCover = null;

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
            price: orderData.price,
            colection: orderData.colection,
            sale: orderData.onSale,
            onSale: orderData.onSale,
            orderId: orderData.orderId,
            seller: orderData.seller,
            listingAt: orderData.listingAt,
            ...(orderData.currentPrice
              ? { currentPrice: orderData.currentPrice }
              : {}),
            ...(orderData.sellerName
              ? { sellerName: orderData.sellerName }
              : {}),
            saleMethod: orderData.saleMethod,
            ...(orderData.collectionFace
              ? { collectionFace: orderData.collectionFace }
              : {}),
          };
        }

        if (orderData.metadata) {
          // console.log(orderData.metadata.nftName);
        } else {
          console.log("no tiene metadata");
        }

        return {
          ...tempJsonObjet,
          ...nftCover,
          ...(walletLog ? { walletLog } : {}),
          // ...orderData,
          // ...(orderData.metadata? {nftName: orderData.metadata.nftName?  orderData.metadata.nftName : "no"}:{nftName: "desconocido"})
        };
      });

      // console.log("resulrado xd");
      // console.log(resultReturned);
      // console.log();

      setOrders(resultReturned);
    }

    // console.log(result);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="mt-[60px] mb-[60px] px-[30px]">
      <ExplorerMenuFillter />
      <NftsCardList cards={orders} />
    </div>
  );
}
