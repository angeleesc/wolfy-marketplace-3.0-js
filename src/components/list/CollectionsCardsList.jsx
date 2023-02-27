import React from "react";
import CollectionCard from "../cards/CollectionCard";
import "./collections-list.scss"

export default function CollectionsCardsList({ collectionList }) {
  return (
    <div className="explorer-collections-container">
      {collectionList.map((collectionData, i) => {
        return (
          <div className="collection-list-item" key={"colection-nft-wolf-" + i}>
            <CollectionCard collectionData={collectionData} />
          </div>
        );
      })}
    </div>
  );
}
