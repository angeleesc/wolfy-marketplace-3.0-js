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
        </div>
      </div>
    </div>
  );
}
