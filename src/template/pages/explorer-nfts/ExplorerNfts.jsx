import React from "react";
import { saleMethod } from "../../../helpers/global-constants";
import NftsCardList from "../../../components/list/NftsCardList";
import ExplorerMenuFillter from "../../../components/menus/ExplorerMenuFillter";

const tempJson = [
  {
    nftName: "Meka-Driver #431",
    colectionName: "Meka Drivers de la profundidad desde el espacio",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xDae97EAFB92F988F268626e4b5120C3E6959bfc7",
    collectionFace:
      "https://i.seadn.io/gcs/files/a34f572a205a891602a747c638d2949e.png?auto=format&w=384",
    sellerFace:
      "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/106e256cfc12976409cd86624417633c.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.054,
    saleMethod: saleMethod.sales,
    tokenId: 431,
    copies: 1,
    sale: 1,
    order: 1,
    sellerName: "angelxd",
  },
  {
    nftName: "Meka-Driver #408",
    colectionName: "Meka Drivers",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xDae97EAFB92F988F268626e4b5120C3E6959bfc7",
    collectionFace:
      "https://i.seadn.io/gae/QpbiWwQP_nQSQJ6qXagezo-GleNo-X3VuoDlyDg1tZujFMugpmNnJFLnfGUXlsLjMcHyz8ZDh5HoIHVA8tPyzbFobg-vBnJMjgOm_A?auto=format&w=256",
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
    sellerName: "angelxd",
  },
  {
    nftName: "Meka-Driver #2670",
    colectionName: "Meka Verse",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xDae97EAFB92F988F268626e4b5120C3E6959bfc7",
    collectionFace:
      "https://i.seadn.io/gae/SFCYIPlcznnwFnI8Jd0dYIh5Atr6cp7HL4tWVWUl7_Onikq7uzQxKfTjdK2ptilWALg1ZBttSvzhXBCUbB9qoSlW9kS8qk1S3Z3xkU0?auto=format&w=256",
    sellerFace:
      "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/f7e59b32bc5cf572048041e9fa9a3f04.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.058,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 3,
    sellerName: "angelxd",
  },
  {
    nftName: "Anisopteraaninae chrysaicus tralala",
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
    sellerName: "angelxd",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9jbG9uZXgtYXNzZXRzLnJ0Zmt0LmNvbS9pbWFnZXMvNTUxMS5wbmc=",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9jbG9uZXgtYXNzZXRzLnJ0Zmt0LmNvbS9pbWFnZXMvNTUxMS5wbmc=",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pa3p0dHAubXlwaW5hdGEuY2xvdWQvaXBmcy9RbVlEdlBBWHRpSmc3czhKZFJCU0xXZGdTcGhRZGFjOGoxWXVRTk54Y0dFMWhnLzQ5MjUucG5n",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1VN1hldjZQa2VhNGtBa0RoUWltMWh6MVRRWTFFc0NmelRvenhBbXpCaU5KSA==",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
  {
    nftName: "Eric Way ",
    colectionName: "Eric Pause Editions",
    seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
    colection: "0xA41f28031d1165cD45c69E6AB9ba2A8BE0201008",
    collectionFace:
      "https://i.seadn.io/gae/xN0Abpk1755I8dMsCh0A2-3CBgpURNerqHOX96k8odPWZhy_RpQAGMqMKPxyP1OUl-fg4P9A596AnuuoAZ4H_d9_2XMxmU29adaV?auto=format&w=256",
    // sellerFace:
    //   "https://i.seadn.io/gcs/files/74ba0d3cf36ea79af0896e2f5b32d17e.jpg?auto=format&w=384",
    isCollectionCheck: true,
    isSellerCheck: true,
    nftCover:
      "https://i.seadn.io/gcs/files/58bc794a5ab636c82a25bc681ba6b32e.png?auto=format&w=384",
    // nftVideo: "",
    price: 0.055,
    saleMethod: saleMethod.sales,
    tokenId: 2670,
    copies: 1,
    sale: 1,
    order: 5,
    sellerName: "angelxd sanche de la con",
  },
];

export default function ExplorerNfts() {
  return (
    <div className="mt-[60px] mb-[60px] px-[30px]">
      <ExplorerMenuFillter  />
      <NftsCardList cards={tempJson} />
    </div>
  );
}
