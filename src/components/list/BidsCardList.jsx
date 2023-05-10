import React from "react";
import "./bids-card-list.scss";
import { useDispatch } from "react-redux";
import { keyModalSate, openModal } from "../../features/modals/modalsSlice";
import { formatDistanceStrict } from "date-fns";
import { es } from "date-fns/locale";

export default function BidsCardList({ bids }) {
  //obtenemos la carta de la subasta
  // luego la renderizamos

  const dispatch = useDispatch();
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
            saleMethod,
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
          const distance = formatDistanceStrict(curentTime, _seconds * 1000, {
            locale: es,
          });

          return (
            <div className="flex justify-center w-[100%]">
              <div className="bid-card" key={"my-auction-oofer-" + i}>
                <div className="flex  ">
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
                        <button
                          className="wolf-buttom wolf-btn-primary-2 w-[100%]"
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(
                              openModal({
                                modal: keyModalSate.checkoutModal,
                                data: {
                                  // order,
                                  orderId,
                                  ...(metadata && metadata.image
                                    ? { nftCover: metadata.image }
                                    : {}),
                                  ...(metadata && metadata.nftName
                                    ? { metadata: metadata.metadata }
                                    : {}),
                                  ...(bestBidder ? { bestBidder } : {}),
                                  saleMethod,
                                },
                              })
                            );
                          }}
                        >
                          Reclamar Nft
                        </button>
                      ) : (
                        <div>Subasta Finalizada</div>
                      )
                    ) : (
                      <div className="bid-zone-content">
                        <p className="text-[13px]">
                          <span className="text-wolf-gray-light-800">
                            Finaliza :
                          </span>{" "}
                          <span>{distance}</span>
                        </p>
                        <button className="wolf-buttom w-[100%] wolf-btn-white">
                          Hacer Otra oferta
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
