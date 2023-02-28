import React from "react";

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
  },
};

export default function TokentFullSpechData() {
  return (
    <div className="pt-[80px] px-[30px] flex">
      <div className="w-[100%] md:w-[50%] " >
        <h3>Multimedia</h3>
      </div>
      <div className="w-[100%] md:w-[50%]" >
        <h3>secion de collecion</h3>
      </div>
    </div>
  );
}
