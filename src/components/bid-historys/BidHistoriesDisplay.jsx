import React, { useEffect, useState } from "react";
import "./hisotry-display.scss";
import { requestEndPoints, rootApipaht } from "../../helpers/global-constants";
import axios from "axios";

export default function BidHistoriesDisplay({ orderDb }) {
  //   console.log("orden de subasta a consultar");
  //   console.log(orderDb);
  const [loading, setLoading] = useState(true);

  const [bids, setBids] = useState([]);

  const init = async () => {
    if (orderDb) {
      console.log("obteniendo los datos desder la bse de datos");

      // const endPont = rootApipaht.porduction + requestEndPoints.firebase.GETAuctionBids;
      const endPont =
        rootApipaht.local + requestEndPoints.firebase.GETAuctionBids(orderDb);
      const result = await axios.get(endPont);

      console.log(result.data);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="bid-histories-display">
      <h3>Ofertas</h3>
    </div>
  );
}
