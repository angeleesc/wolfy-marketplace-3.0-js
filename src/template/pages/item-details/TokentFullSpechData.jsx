import React from "react";
import "./token-data.scss";
import AtributesDisplay from "../../../components/attributes-display/AtributesDisplay";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../../helpers/static-routes";
import { MdLoyalty, MdAnalytics, MdHistory } from "react-icons/md";
import { useSearchParams } from "react-router-dom"

const temJson2 = {
  history: [
    {
      type: "listing",
      seller: "0x23b057357893Fb958571f81197823D6B1e84d64f",
      time: 1677857708000,
      quantity: "0.05",
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
    animation_url:
      "https://pixelmon-training-rewards.s3-accelerate.amazonaws.com/6/Spout.mp4",

    description:
      "es un caballo digital con poderes de caballo de agua de edicion limitada tienes suerte de ver uno XD",
  },
};

export default function TokentFullSpechData() {
  const nftFullData = temjson1;

  const [ queryParams, setQueryParams ] = useSearchParams()

  const tapOption = queryParams.get("tab")

  console.log(tapOption)

  return (
    <div className="wolf-item-data-contianer">
      <div className="wolf-item-data-item w-[100%] min-[700px]:w-[50%] ">
        <h3>Imagenes</h3>
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
            <button className="wolf-buttom flex justify-center items-center wolf-button-active">
              <span>Propiedad</span> <MdAnalytics className="ml-2" />
            </button>
            <button className="wolf-buttom flex justify-center items-center wolf-button-active">
              <span>Historial</span> <MdHistory className="ml-2" />
            </button>
            <button className="wolf-buttom flex justify-center items-center wolf-button-active">
              <span>Ofertas</span> <MdAnalytics className="ml-2" />
            </button>
          
          </div>

          {nftFullData.metadata.attributes && (
            <>
              <AtributesDisplay
                attributes={nftFullData.metadata.attributes}
                trayCollectionDef={nftFullData.collectionData.defAtributes}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
