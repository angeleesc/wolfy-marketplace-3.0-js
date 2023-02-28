import React from "react";
import TokentFullSpechData from "../template/pages/item-details/TokentFullSpechData";

const tempJson = {
  name: "CloneX #4137",
  description:
    "🧬 CLONE X 🧬\n\n20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸\n\nIf you own a clone with even one Murakami trait please read the terms regarding third-party content here: https://rtfkt.com/legal-2B.\n\nYou are not entitled to a commercial license if you own an avatar with any traits created by Murakami.",
  attributes: [
    {
      trait_type: "DNA",
      value: "Robot",
    },
    {
      trait_type: "Eye Color",
      value: "WIDE-OPEN",
    },
    {
      trait_type: "Hair",
      value: "PNK MoHWK",
    },
    {
      trait_type: "Jewelry",
      value: "GLD CBLE",
    },
    {
      trait_type: "Clothing",
      value: "IRI BLW UP JCKT",
    },
    {
      trait_type: "Eyewear",
      value: "OTT Future Vision",
    },
    {
      trait_type: "Type",
      value: "MURAKAMI DRIP",
    },
  ],
  image: "https://clonex-assets.rtfkt.com/images/18342.png",
};

const tempJson2 = {
  "animation_url": "https://champions.io/pets/nfts/art/20191/nft.mp4",
  "attributes": [
  {
  "trait_type": "Edition",
  "value": "Holders Bonus"
  },
  {
  "trait_type": "House Banner",
  "value": "🌊   Water"
  },
  {
  "trait_type": "Family",
  "value": "Xiva"
  },
  {
  "trait_type": "Personality",
  "value": "Active"
  },
  {
  "trait_type": "Favorite Toy",
  "value": "Whisperer Ear"
  },
  {
  "trait_type": "Favorite Family",
  "value": "Fenrir"
  },
  {
  "trait_type": "Favorite Food",
  "value": "🐟  Fish"
  }
  ],
  "background_color": "ffffff",
  "description": "On the first day of summer, all of Massina gathers to celebrate the Xiva Festival, in honor of these mischievous fire spirits that can be found deep within the underground pits of Mt. Volcanus. Only the boldest in Massina have access to this pet.",
  "external_url": "https://champions.io/pet-details/20191",
  "image": "https://champions.io/pets/nfts/art/20191/pfp.png",
  "media": {
  "nft": "https://champions.io/pets/nfts/art/20191/nft.mp4",
  "pfp": "https://champions.io/pets/nfts/art/20191/pfp.png"
  },
  "name": "Pet #20191"
  }

export default function TokenFullInfoData() {
  return (
    <>
      <TokentFullSpechData />
    </>
  );
}
