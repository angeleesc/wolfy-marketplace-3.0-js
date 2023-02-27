import React from "react";
import "./collection-card.scss";

export default function CollectionCard({ collectionData }) {
  const {
    collectionName,
    collectionAuthor,
    item,
    floorPrice,
    onSale,
    owners,
    isColectionVerified,
    isAuthorVerified,
    authorAvartar,
    coverImg,
    sampleImgs,
  } = collectionData;

  let itemUi, onSaleUi, ownersUi;

  switch (true) {
    case item < 10000:
      itemUi = item;
      break;

    case item >= 10000 && item <= 999999:
      itemUi = `${Number(Number(item / 1000).toFixed(2))}k`;
      break;

    case item >= 1000000:
      itemUi = `${Number(Number(item / 1000000).toFixed(2))}M`;

    default:
      break;
  }

  switch (true) {
    case owners < 10000:
      ownersUi = owners;
      break;

    case owners >= 10000 && owners <= 999999:
      ownersUi = `${Number(Number(owners / 1000).toFixed(2))}k`;
      break;

    case owners >= 1000000:
      ownersUi = `${Number(Number(owners / 1000000).toFixed(2))}M`;

    default:
      break;
  }
  switch (true) {
    case onSale < 10000:
      onSaleUi = onSale;
      break;

    case onSale >= 10000 && onSale <= 999999:
      onSaleUi = `${Number(Number(onSale / 1000).toFixed(2))}k`;
      break;

    case onSale >= 1000000:
      onSaleUi = `${Number(Number(onSale / 1000000).toFixed(2))}M`;

    default:
      break;
  }

  return (
    <div className="collection-card">
      <div className="collection-card-body">
        <div className="multimedia-data">
          <div className="img-zone-1 mr-2 relative">
            {sampleImgs[0] && <img src={sampleImgs[0]} alt="sample-img-1" />}
            <div className="avatar-zone">
              <div className="avatar-item mb-2">
                <img src={authorAvartar} alt="authro-avatar" />
              </div>
              <div className="avatar-item">
                <img src={coverImg} alt="cover-collection" />
              </div>
            </div>
          </div>
          <div className="img-zone-2">
            <div className="img-zone-21">
              <div className="img-zone-211 mr-1">
                {sampleImgs[1] && (
                  <img src={sampleImgs[1]} alt="sample-img-2" />
                )}
              </div>
              <div className="img-zone-212 ml-1">
                {sampleImgs[2] && (
                  <img src={sampleImgs[2]} alt="sample-img-3" />
                )}
              </div>
            </div>

            <div className="img-zone-22 mt-2">
              {sampleImgs[3] && <img src={sampleImgs[3]} alt="img-sample-4" />}
            </div>
          </div>
        </div>
        <div className="info-data">
          <h4 className="colection-tite">{collectionName}</h4>
          <div className="colection-basic-spech">
            <div className="collection-atribute">
              <span className="key">Nfts</span>
              <span className="value">{itemUi}</span>
            </div>
            <div className="collection-atribute">
              <span className="key">Dueños</span>
              <span className="value">{ownersUi}</span>
            </div>
            <div className="collection-atribute">
              <span className="key">En venta</span>
              <span className="value">{itemUi}</span>
            </div>
            <div className="collection-atribute">
              <span className="key">Desde</span>
              <span className="value">{floorPrice}ETH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
