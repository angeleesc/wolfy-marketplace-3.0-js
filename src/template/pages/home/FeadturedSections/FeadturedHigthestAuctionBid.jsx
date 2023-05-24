import React from "react";
import FeacturedSwiper from "./featured-swiper/FeacturedSwiper";
import { useState } from "react";
import {
  requestEndPoints,
  rootApipaht,
  saleMethod,
} from "../../../../helpers/global-constants";
import axios from "axios";
import { useEffect } from "react";

export default function FeadturedHigthestAuctionBid() {
  const [laoding, setLaoding] = useState(true);
  const [nftsData, setNftsData] = useState([]);

  const init = async () => {
    const endpoint =
      rootApipaht.local + requestEndPoints.firebase.GETOrdersByQuery;

    console.log(endpoint);

    const query = [
      {
        type: "where",
        index: "endTime",
        operator: ">=",
        value: Date.now(),
        valueType: "date",
      },
      {
        type: "orderBy",
        index: "endTime",
        orderDirection: "desc",
      },
      {
        type: "orderBy",
        index: "currentPrice",
        orderDirection: "desc",
      },
    ];

    const result = await axios.get(endpoint, {
      params: {
        query: JSON.stringify(query),
      },
    });

    console.log(result.data);

    const { isSuccess, hasData, orders } = result.data;

    if(isSuccess && hasData){
      // setNftsData(orders)
    }

    setLaoding(false)

  };

  useEffect(() => {
    init();
  }, []);



  return (
    <FeacturedSwiper
      title={"Subastas destacadas"}
      loading={laoding}
      data={nftsData}
    />
  );
}
