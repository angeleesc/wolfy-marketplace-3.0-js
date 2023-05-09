import React from "react";
import "./bids-card-list.scss";

export default function BidsCardList({ bids }) {
  //obtenemos la carta de la subasta
  // luego la renderizamos

  const curentTime = Date.now();

  return (
    <div className="flex justify-center mb-[100px]">
      <div className="bids-card-list">
        {bids.map((bid, i) => {
          const {
            bestBidder,
            blockChain,
            chainId,
            colection,
            metadata,
            orderId,
            isBestBider,
            currentPrice,
            endTime,
            seller,
          } = bid;

          // console.log(endTime);
          // console.log(endTime);

          //verificamos si es el mejor postor
          // verificamos si la subasta esta en curso
          // si la subasta esta en curso puede seguir haciendo ofertas
          // pero si la sunbasta finaliza
          // verificamo si el es el mejor posto
          // si es el mejor postor tendra habilidato el boton para finalizar subasta
          // caso contrario ponemos un div de subasta finalizada

          const { _seconds } = endTime;

          return (
            <div className="bid-card" key={"my-auction-oofer-" + i}>
              <div className="flex">
                <div className="bid-card-multimendia">
                  {metadata && metadata.image && (
                    <img src={metadata.image} alt="" />
                  )}
                </div>
                <div className="bid-card-content">
                  <h3 className="title">
                    <span className="key">NFT :</span>
                    <span className="value">
                      {metadata && metadata.nftName
                        ? metadata.nftName
                        : "Desconocido"}
                    </span>
                  </h3>
                  <div className="price-zone">
                    <span>Puja reazilada</span>
                    <h3
                      className={
                        isBestBider ? "text-green-500" : "text-red-600"
                      }
                    >
                      {currentPrice ? currentPrice : "desconocida"}
                    </h3>
                  </div>

                  <div className="price-zone">
                    <span>Eres el mejor postor</span>
                    <h3>{isBestBider ? "SI" : "NO"}</h3>
                  </div>

                  {/* <span>{}</span> */}
                </div>
              </div>
              <div className="bid-zone">
                <div className="footer-secciotn w-[100%]">
                  {curentTime > _seconds * 1000 ? (
                    isBestBider ? (
                      <button className="wolf-buttom wolf-btn-primary-2 w-[100%]">
                        Reclamar Nft
                      </button>
                    ) : (
                      <div>Subasta Finalizada</div>
                    )
                  ) : (
                    <div className="bid-zone-content">
                      <p>
                        <span>Termina</span> <span>{"xd"}</span>
                      </p>
                      <h3>5 horas</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
