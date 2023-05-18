import React, { useEffect, useState } from "react";
import "./hisotry-display.scss";
import { requestEndPoints, rootApipaht } from "../../helpers/global-constants";
import axios from "axios";
import LoadingSection from "../loading-section/LoadingSection";
import WolfDoubtful from "../icons/WolfDoubtful";
import WolfIdentidcon from "../identicon/WolfIdentidcon";

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

      const { bidders, hasData, isSuccess } = result.data;

      if (isSuccess && hasData) {
        setBids(bidders);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="bid-histories-display">
      {loading ? (
        <div className="loading-section">
          <LoadingSection />
        </div>
      ) : bids.length > 0 ? (
        <div className="bisd-list-container">
          <h3 className="font-semibold text-[20px]">Ofertas disponible</h3>
          <span className="text-[14px] text-center font-semibold text-wolf-gray-light-1200 block w-[100%]">
            Aqui estan los top 10 de mejores ofertas hecha para esta nft
          </span>
          <div>
            {bids.map((bid, kei) => {
              return (
                <div key={orderDb + "-" + kei} className="bid-list-item">
                  <div className="bidder-section">
                    <WolfIdentidcon size={30} name={bid.bidder} />
                    <div className="ml-2">
                      <span>postor</span>
                      <h4>{`${bid.bidder.substring(0, 5)}...${bid.bidder.substr(
                        -5
                      )}`}</h4>
                    </div>
                  </div>
                  <div className="bid-section">
                    <span>puja</span>
                    <h4>{bid.bid}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-[15px] p-[10px] bg-wolf-gray-dark-400 border border-wolf-gray-dark-800 rounded-[16px]">
          <h3>Sin ofertas</h3>
          <WolfDoubtful />
          <p className="text-[14px] text-center font-semibold text-wolf-gray-light-1200">
            no hay ofertas asociadaqs a esta subasta
          </p>
        </div>
      )}
    </div>
  );
}
