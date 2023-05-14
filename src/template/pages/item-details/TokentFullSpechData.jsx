import React, { useState } from "react";
import "./token-data.scss";
import AtributesDisplay from "../../../components/attributes-display/AtributesDisplay";
import { Link, useParams } from "react-router-dom";
import { staticRoutes } from "../../../helpers/static-routes";
import { MdLoyalty, MdAnalytics, MdHistory } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import {
  itemDetaisTabOption,
  requestEndPoints,
  rootApipaht,
  saleMethod,
} from "../../../helpers/global-constants";
import WolfSad from "../../../components/icons/WolfSad";
import WolfDoubtful from "../../../components/icons/WolfDoubtful";
import NftHistoriDisplay from "../../../components/nft-history/NftHistoriDisplay";
import PriceZoen from "../../../components/price-zone/PriceZoen";
import { useEffect } from "react";
import axios from "axios";
import LoadingSection from "../../../components/loading-section/LoadingSection";

const temJson2 = {
  history: [
    {
      type: "listing",
      seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
      // nftAdders: "0xaA7200ee500dE2dcde75E996De83CBD73BCa9705",
      // tokenId: 2,
      time: 1677857708000,
      quantity: "0.05",
    },
    {
      type: "mint",
      author: "0x23b057357893Fb958571f81197823D6B1e84d64f",
      time: 1677857708000,
      // nftAdders: "0xaA7200ee500dE2dcde75E996De83CBD73BCa9705",
      // tokenId: 2,
    },
    {
      type: "sell",
      seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
      buyer: "0xA5ba155b5f92E4d59B74a3565918075487e4A397",
      // nftAdders: "0xaA7200ee500dE2dcde75E996De83CBD73BCa9705",
      // tokenId: 2,
      price: 0.07,
      time: 1677857708000,
    },
    {
      type: "transfer",
      seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
      buyer: "0xA5ba155b5f92E4d59B74a3565918075487e4A397",
      // nftAdders: "0xaA7200ee500dE2dcde75E996De83CBD73BCa9705",
      // tokenId: 2,
      time: 1677857708000,
    },
  ],
};

const temjson1 = {
  orderId: "1",
  price: 0.006,
  ehterPrice: "6000000000000000",
  nftAddres: "0x32973908FaeE0Bf825A343000fE412ebE56F802A",
  quantity: 1,
  tokenID: [1],
  saleMethod: saleMethod.sales,
  seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",

  collectionData: {
    collectionName: "Pixelmon - Generation 1",
    collectionAuthor: "Pixelmon-Vault",
    item: 10000,
    floorPrice: 0.0045,
    onSale: 25,
    owners: 2864,
    isColectionVerified: true,
    isAuthorVerified: true,
    defAtributes: [
      {
        trait_type: "Species",
        rarity: 2,
        // value: "Spout",
      },
      {
        trait_type: "Origin",
        rarity: 20,
      },
      {
        trait_type: "Rarity",
        rarity: 37,
      },
      {
        trait_type: "HP",
        range: 109,
      },
      {
        trait_type: "Attack",
        range: 104,
      },
      {
        trait_type: "Defense",
        range: 103,
      },
      {
        trait_type: "Special Attack",
        range: 104,
      },
      {
        trait_type: "Special Defense",
        range: 101,
      },
      {
        trait_type: "Affinity",
        range: 100,
      },
      {
        display_type: "boost_number",
        trait_type: "Luck",
        boost: true,
      },
      {
        display_type: "boost_percentage",
        trait_type: "Reward Multiplier",
      },
      {
        trait_type: "Level",
        range: 20,
      },
      {
        trait_type: "Unknown",
        range: 20,
      },
      {
        trait_type: "Trainer Claimed",
        rarity: 54,
      },
      {
        trait_type: "Generation",
        display_type: "number",
        range: 1,
      },
      {
        trait_type: "Evolution",
        display_type: "number",
        range: 1,
      },
      {
        trait_type: "Hatched On",
        display_type: "date",
        value: 1645990096,
      },
    ],

    authorAvartar:
      "https://i.seadn.io/gcs/files/281a2fe422ac5614e9d32fad1f93b09d.png?auto=format&w=256",
    coverImg:
      "https://i.seadn.io/gcs/files/281a2fe422ac5614e9d32fad1f93b09d.png?auto=format&w=256",
    sampleImgs: [
      "https://pixelmon-training-rewards.s3-accelerate.amazonaws.com/0/Purralysis.jpg",
      "https://pixelmon-training-rewards.s3-accelerate.amazonaws.com/0/Moler.jpg",
      "https://pixelmon-training-rewards.s3-accelerate.amazonaws.com/0/Hazerd.jpg",
      "https://pixelmon-training-rewards.s3-accelerate.amazonaws.com/0/Spout.jpg",
    ],
  },

  metadata: {
    name: "Pixelmon #1680",
    image:
      "https://pixelmon-training-rewards.s3-accelerate.amazonaws.com/0/Spout.jpg",
    image_url:
      "https://pixelmon-training-rewards.s3-accelerate.amazonaws.com/0/Spout.jpg",
    external_url: "https://pixelmon.club/",
    reward_bitmask: 6,
    attributes: [
      {
        trait_type: "Species",
        value: "Spout",
      },
      {
        trait_type: "Origin",
        value: "Water",
      },
      {
        trait_type: "Rarity",
        value: "Common",
      },
      {
        trait_type: "HP",
        value: 23,
      },
      {
        trait_type: "Attack",
        value: 35,
      },
      {
        trait_type: "Defense",
        value: 29,
      },
      {
        trait_type: "Special Attack",
        value: 43,
      },
      {
        trait_type: "Special Defense",
        value: 32,
      },
      {
        trait_type: "Affinity",
        value: 100,
      },
      {
        display_type: "boost_number",
        trait_type: "Luck",
        value: 1,
      },
      {
        display_type: "boost_percentage",
        trait_type: "Reward Multiplier",
        value: 0,
      },
      {
        trait_type: "Level",
        value: 5,
      },
      {
        trait_type: "Unknown",
        value: 14,
      },
      {
        trait_type: "Trainer Claimed",
        value: "Yes",
      },
      {
        trait_type: "Generation",
        display_type: "number",
        value: 1,
      },
      {
        trait_type: "Evolution",
        display_type: "number",
        value: 1,
      },
      {
        trait_type: "Hatched On",
        display_type: "date",
        value: 1645990096,
      },
    ],
    // animation_url:
    //   "https://pixelmon-training-rewards.s3-accelerate.amazonaws.com/6/Spout.mp4",

    description:
      "es un caballo digital con poderes de caballo de agua de edicion limitada tienes suerte de ver uno XD",
  },
};

export default function TokentFullSpechData() {
  // const nftFullData = temjson1;
  const [nftFullData, setNftFullData] = useState(temjson1);
  const [loading, setLoading] = useState(true);

  const [queryParams, setQueryParams] = useSearchParams();
  const tapOption = queryParams.get("tab");

  const { collection, id, tokenId } = useParams();

  const init = async () => {
    console.log("obteniendo los datos desder la bse de datos");
    // const endPont = rootApipaht.local + requestEndPoints.alchemy.getFullNftData;
    const endPont =
      rootApipaht.porduction + requestEndPoints.alchemy.getFullNftData;

    const result = await axios.get(endPont, {
      params: {
        collection,
        id,
        tokenId,
      },
    });

    console.log(result.data);
  };

  useEffect(() => {
    init();
  }, [tapOption]);

  return loading ? (
    <div className="w-[100%] h-[100vh] pt-[60px] flex justify-center items-center ">
    <LoadingSection />
    </div>
  ) : (
    <div className="wolf-item-data-contianer">
      <div className="wolf-item-data-item  w-[100%] min-[700px]:w-[50%] ">
        {
          // verificamos si el archivo tiene un video
          nftFullData.metadata["animation_url"] ? (
            <div className="multimedia-zone">
              <video controls loop>
                <source src={nftFullData.metadata["animation_url"]} />
              </video>
            </div>
          ) : (
            <div>
              {nftFullData.metadata["image_url"] ? (
                <div className="multimedia-zone">
                  <img
                    src={nftFullData.metadata["image_url"]}
                    alt="image-metadata"
                  />
                </div>
              ) : nftFullData.metadata["image"] ? (
                <div className="multimedia-zone">
                  <img
                    src={nftFullData.metadata["image"]}
                    alt="image-metadata"
                  />
                </div>
              ) : (
                <div>
                  <h3>Formano de metadata no reconocible </h3>
                </div>
              )}
            </div>
          )
        }
      </div>
      <div className="wolf-item-data-item flex flex-col xd w-[100%] min-[700px]:w-[50%]">
        <div className="wolf-info-section-data">
          <div className="colection-father-zone">
            <Link
              to={staticRoutes.colectionInfoData(nftFullData.nftAddres)}
              className="title-zone"
            >
              <div className="avatar-zone">
                <img
                  src={nftFullData.collectionData.coverImg}
                  alt="colection-cover"
                />
              </div>
              <div className="text-zone">
                <h3>{nftFullData.collectionData.collectionName}</h3>
              </div>
            </Link>
          </div>
          <h2 className="nft-title mt-[12px]">{nftFullData.metadata.name}</h2>
          {nftFullData.metadata.description && (
            <div className="info-data mt-[15px] ">
              <p>{nftFullData.metadata.description}</p>
            </div>
          )}

          <div className="soy-stiky">
            <button
              className={`wolf-buttom flex justify-center items-center ${
                !tapOption ? "wolf-button-active" : ""
              }`}
              onClick={() => {
                setQueryParams({});
              }}
            >
              <span>Propiedad</span> <MdAnalytics className="ml-2" />
            </button>
            <button
              className={`wolf-buttom flex justify-center items-center ${
                tapOption === itemDetaisTabOption.history
                  ? "wolf-button-active"
                  : ""
              }`}
              onClick={() => {
                setQueryParams({
                  tab: itemDetaisTabOption.history,
                });
              }}
            >
              <span>Historial</span> <MdHistory className="ml-2" />
            </button>
            <button
              className={`wolf-buttom flex justify-center items-center ${
                tapOption === itemDetaisTabOption.bid
                  ? "wolf-button-active"
                  : ""
              }`}
              onClick={() => {
                setQueryParams({
                  tab: itemDetaisTabOption.bid,
                });
              }}
            >
              <span>Ofertas</span> <MdAnalytics className="ml-2" />
            </button>
          </div>

          {!tapOption && (
            <>
              {nftFullData.metadata.attributes ? (
                <>
                  <AtributesDisplay
                    attributes={nftFullData.metadata.attributes}
                    trayCollectionDef={nftFullData.collectionData.defAtributes}
                  />
                </>
              ) : (
                <div className="flex flex-col items-center mt-[15px] p-[10px] bg-wolf-gray-dark-400 border border-wolf-gray-dark-800 rounded-[16px]">
                  <h3>Sin atributos</h3>
                  <WolfDoubtful />
                  <p className="text-[14px] font-semibold text-wolf-gray-light-1200">
                    esta nft no tiene algun atributo que compartir
                  </p>
                </div>
              )}
            </>
          )}

          {tapOption === itemDetaisTabOption.history && (
            <NftHistoriDisplay nftHistory={temJson2.history} />
          )}
        </div>
        <div className="price-zone">
          <PriceZoen
            expirationTime={nftFullData.expirationTime}
            price={nftFullData.price}
            quantity={nftFullData.quantity}
            saleMethod={nftFullData.saleMethod}
            seller={nftFullData.seller}
            sellerAvatar={nftFullData.sellerAvatar}
            sellerName={nftFullData.sellerName}
          />
        </div>
      </div>
    </div>
  );
}
