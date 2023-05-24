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

  const [hasError, setHasError] = useState(false)

  const init = async () => {

    setLaoding(true)

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

   
    try {
      
      const result = await axios.get(endpoint, {
        params: {
          query: JSON.stringify(query),
        },
      });
  
      console.log(result.data);
  
      const { isSuccess, hasData, orders } = result.data;
  
      if(isSuccess && hasData){
        setNftsData(orders)
        setHasError(false)
      }else{
        setNftsData([])
        setHasError(false)
      }
  

    } catch (error) {

      // console.log("ocurrio un erro")

      setHasError(true)

      
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
      onEmptyResulMessage={"Actuamente no hay subasta destacadas"}
      onErroRmessage ={"lo siento pero ocurrio un error"}
      hasErrorRequest = {hasError}
    />
  );
}
