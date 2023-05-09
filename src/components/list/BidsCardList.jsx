import React from "react";
import "./bids-card-list.scss";

export default function BidsCardList({ bids }) {
  //obtenemos la carta de la subasta
  // luego la renderizamos

  return (
    <div className="flex justify-center">
      <div className="bids-card-list">
        {bids.map((bid, i) => {
          const {
            bestBidder,
            blockChain,
            chainId,
            colection,
            metadata,
            orderId,
            currentPrice,
            endTime,
            seller,
          } = bid;

          return (
            <div className="bid-card" key={"my-auction-oofer-" + i}>
              <div className="bid-card-multimendia">
                {metadata && metadata.image && (
                  <img src={metadata.image} alt="" />
                )}
              </div>
              <div className="bid-card-content">
                <h3>
                  {metadata && metadata.nftName
                    ? metadata.nftName
                    : "Desconocido"}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
