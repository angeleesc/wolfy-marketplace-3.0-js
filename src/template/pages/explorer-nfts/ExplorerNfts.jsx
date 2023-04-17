import React, { useEffect, useState } from "react";
import { saleMethod } from "../../../helpers/global-constants";
import NftsCardList from "../../../components/list/NftsCardList";
import ExplorerMenuFillter from "../../../components/menus/ExplorerMenuFillter";
import { useSearchParams } from "react-router-dom";
import { getOdres } from "../../../controllers/firebaseControllers";
import worderin from "../../../static-images/wondering.png";

export default function ExplorerNfts() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [orders, setOrders] = useState([]);

  const filleterData = {
    ...(searchParams.get("sortBy")
      ? { sortBy: searchParams.get("sortBy") }
      : {}),
  };

  const tempJsonObjet = {
    // nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    // collectionFace:
    //   "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover: worderin,
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
  };

  const getAllOrders = async () => {
    const result = await getOdres({});

    if (result.isSuccess && result.hasData) {
      console.log(result.orders);

      const resultReturned = result.orders.map((orderData) => {
        let nftCover = null;

        if (orderData.metadata) {
          nftCover = {
            ...(orderData.metadata.nftName
              ? { nftName: orderData.metadata.nftName }
              : { nftName: "desconocido" }),
            ...(orderData.metadata.thumbnail
              ? { nftCover: orderData.metadata.thumbnail }
              : orderData.metadata.image
              ? { nftCover: orderData.metadata.image }
              : { nftCover: worderin }),
            ...(orderData.metadata.contractType
              ? { contractType: orderData.metadata.contractType }
              : {}),
            price: orderData.price,
            colection: orderData.colection,
            sale: orderData.onSale,
            onSale: orderData.onSale,
            orderId: orderData.orderId,
            selleror: orderData.seller,
            listingAt: orderData.listingAt,
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
          console.log(orderData.metadata.nftName);
        } else {
          console.log("no tiene metadata");
        }

        return {
          ...tempJsonObjet,
          ...nftCover,
          // ...orderData,
          // ...(orderData.metadata? {nftName: orderData.metadata.nftName?  orderData.metadata.nftName : "no"}:{nftName: "desconocido"})
        };
      });

      console.log("resulrado xd");
      console.log(resultReturned);
      console.log();

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
