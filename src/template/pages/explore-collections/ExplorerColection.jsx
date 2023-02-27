import React from "react";
import CollectionsCardsList from "../../../components/list/CollectionsCardsList";

const tempJson = [
  {
    collectionName: "The Metascapes",
    collectionAuthor: "TheMetascapesContract",
    item: 2555,
    floorPrice: 0.06847,
    onSale: 5,
    owners: 250,
    isColectionVerified: true,
    isOwonerVerified: true,
    coverImg:
      "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
    sampleImgs: [
      "https://i.seadn.io/gae/vVRoALaQyJy8a53CpeEWdS2HGLQ5MjpNc5L7HzKCjt4NT4DSyu7ySTCqGPJu8tMTQA3VwxX-9rQN3xbFAEi0gPSo7pnD6eWouY1l7jU?auto=format&w=384",
      "https://i.seadn.io/gae/046bRlEsFhtveH4xtw7uhQ0QF7sk5u4dy1hQ06TRcfx-kmi3-WFg5EwcCHBsJhOg0l52UjisI1HkzBSz-K66O61sFXUqa9TZhZRReQ?auto=format&w=384",
      "https://i.seadn.io/gae/OOTHfRbWuSqKvtawFkTmbKiQiewXfophrszPWYF6vEGWDSU_j7eAF0oDIczagpKKCVR4PzvcOi3Ulf4pl_w8nVaXoW7p0AxW3hB-0w?auto=format&w=384",
      "https://i.seadn.io/gae/xnNP190NLBh7K60hu5ycmEVBfRWSdH7MnFHhu0L-P1UF26Ov7lQUPEUa0rdrxSj3lzs6gGi7Ly3RfrSjO2sLK4pL6oEc2UVWr16r?auto=format&w=384",
    ],
  },
];

export default function ExplorerColection() {
  return (
    <div className="mt-[80px] px-[30px]">
      <h3>explorer colection</h3>
      <div className="" >
        <CollectionsCardsList collectionList={tempJson} />
      </div>
    </div>
  );
}
