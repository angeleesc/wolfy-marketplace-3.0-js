import React from "react";
import { saleMethod } from "../helpers/global-constants";
import ExplorerNfts from "../template/pages/explorer-nfts/ExplorerNfts";

const tempJson = [
  {
    nftName: "Meka-Driver #431",
    colectionName: "Meka Drivers",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xDae97EAFB92F988F268626e4b5120C3E6959bfc7",
    collectionFace:
      "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
    sellerFace:
      "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/b09e5f0d6e130dcd223afa2c50decfaf.jpg?auto=format&w=384",
    // nftVideo: "",
    price: 0.054,
    saleMethod: saleMethod.sales,
    tokenId: 431,
    copies: 1,
    sale: 1,
    order: 1,
  },
  {
    nftName: "Meka-Driver #408",
    colectionName: "Meka Drivers",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xDae97EAFB92F988F268626e4b5120C3E6959bfc7",
    collectionFace:
      "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
    sellerFace:
      "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/338c12de9825b41ddc3d5a7334e1b8de.jpg?auto=format&w=384",
    // nftVideo: "",
    price: 0.058,
    saleMethod: saleMethod.sales,
    tokenId: 408,
    copies: 1,
    sale: 1,
    order: 2,
  },
  {
    nftName: "Meka-Driver #2670",
    colectionName: "Meka Drivers",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xDae97EAFB92F988F268626e4b5120C3E6959bfc7",
    collectionFace:
      "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
    sellerFace:
      "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/48687ec4e52323a4369d313c7b057322.jpg?auto=format&w=384",
    // nftVideo: "",
    price: 0.058,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 3,
  },
  {
    nftName: "Anisopteraaninae chrysaicus",
    colectionName: "CHRYSALISM: LARVA",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gcs/files/895ba798318372d4be4538d10b6c9fb9.jpg?auto=format&w=256",
    sellerFace:
      "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/d791d38af9a6bb63be34343aa24a630a.jpg?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 4,
  },
  {
    nftName: "Anisopteraaninae chrysaicus",
    colectionName: "CHRYSALISM: LARVA",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gcs/files/895ba798318372d4be4538d10b6c9fb9.jpg?auto=format&w=256",
    sellerFace:
      "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/d791d38af9a6bb63be34343aa24a630a.jpg?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
  },
];


export default function ExplorerNFTS() {
  return (
    <>
      <ExplorerNfts />
    </>
  );
}
