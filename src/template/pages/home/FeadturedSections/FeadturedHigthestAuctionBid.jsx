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
      // {
      //   type: "where",
      //   index: "saleMethod",
      //   operator: "==",
      //   value: saleMethod.auction,
      //   valueType: "string"
      // },
      {
        type: "where",
        index: "endTime",
        operator: ">=",
        value: Date.now(),
        valueType: "date"
      }
    ];

    
    const result = await axios.get(endpoint, {
      params: {
        query: JSON.stringify(query),
      },
    });

    console.log(result.data);
  };

  useEffect(() => {
    init();
  }, []);

  return <FeacturedSwiper title={"Subastas destacadas"} loading={laoding} />;
}
