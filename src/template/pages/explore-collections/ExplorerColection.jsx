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
    authorAvartar:
      "https://i.seadn.io/gae/T8aOHPcQPfWABYubLqcx4cbVSoSMBYl6zg2fAlWQ7tRjGva1jRmYOrmUCKbmhS_jZdpqBSJ8RrMAqnYGtYDzYEV2hyTMiWMPst4REnI?auto=format&w=384",
    coverImg:
      "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
    sampleImgs: [
      "https://i.seadn.io/gae/vVRoALaQyJy8a53CpeEWdS2HGLQ5MjpNc5L7HzKCjt4NT4DSyu7ySTCqGPJu8tMTQA3VwxX-9rQN3xbFAEi0gPSo7pnD6eWouY1l7jU?auto=format&w=384",
      "https://i.seadn.io/gae/046bRlEsFhtveH4xtw7uhQ0QF7sk5u4dy1hQ06TRcfx-kmi3-WFg5EwcCHBsJhOg0l52UjisI1HkzBSz-K66O61sFXUqa9TZhZRReQ?auto=format&w=384",
      "https://i.seadn.io/gae/OOTHfRbWuSqKvtawFkTmbKiQiewXfophrszPWYF6vEGWDSU_j7eAF0oDIczagpKKCVR4PzvcOi3Ulf4pl_w8nVaXoW7p0AxW3hB-0w?auto=format&w=384",
      "https://i.seadn.io/gae/xnNP190NLBh7K60hu5ycmEVBfRWSdH7MnFHhu0L-P1UF26Ov7lQUPEUa0rdrxSj3lzs6gGi7Ly3RfrSjO2sLK4pL6oEc2UVWr16r?auto=format&w=384",
    ],
  },

  {
    collectionName: "#Landers",
    collectionAuthor: "3L-Deployer",
    item: 10000,
    floorPrice: 0.1535,
    onSale: 8,
    owners: 5348,
    isColectionVerified: true,
    isAuthorVerified: true,
    authorAvartar:
      "https://i.seadn.io/gae/T8aOHPcQPfWABYubLqcx4cbVSoSMBYl6zg2fAlWQ7tRjGva1jRmYOrmUCKbmhS_jZdpqBSJ8RrMAqnYGtYDzYEV2hyTMiWMPst4REnI?auto=format&w=384",
    coverImg:
      "https://i.seadn.io/gae/tStSWQ2QRTvYwz--9cKDmzlApbfvA8574zkJ7vz6zdJj6zRD7DmM5LccTUmjA3KYYwXQGd6cvjzmvxnJLY6Y2cAZGQSVmsZR8H44Dg?auto=format&w=256",

    sampleImgs: [
      "https://i.seadn.io/gae/ToeWl0Qcag1i_WVXVwRJClZ-kx4yBDqo0X_JIuDtgH8yhz4iYmVlgugQ7HI89Wg_yGPxWedvKHdJhcnMcVJPOAAMGueO9cAp3iUe?auto=format&w=384",
      "https://i.seadn.io/gae/qlgpBUQAPL433U3PuEjy-WtX7oG_apyhgJw3EcL2wg9NoB6zNc0i3WQC3xyFxMMcSmT6UFSlKWIKmUkCLbpMiOuYX1BOdxWgsoVJNf0?auto=format&w=384",
      "https://i.seadn.io/gae/Qoxjvi_zZRUgFnKFFYN4l175e9UPLJS3J4bAO6w6dJyOAo2mnCjUv73Jq0yQbT6wCHPyTrSh9W5bj8fpwx0pgzyv9bFWgnjTmXVf?auto=format&w=384",
      "https://i.seadn.io/gae/iYt60kY4P114YHj-F3z7zfiqHJ5rANg11HPzzyyCj1tU3aYDYLvySEwLyjxGmMXRzfIcGp7A02gg6M2Lwi4U8sXqd3WGcafa-sdXDg?auto=format&w=384",
    ],
  },
  {
    collectionName: "#Avid Lines",
    collectionAuthor: "200013B",
    item: 500,
    floorPrice: 0.78,
    onSale: 20,
    owners: 260,
    isColectionVerified: true,
    isAuthorVerified: true,
    authorAvartar:
      "https://i.seadn.io/gae/lRWRamPzqmqB3u9gSjPGzfLz85Tswg134nFDOsaMj_GdjOK3EVoi5MlXxweSF_LdW3BVJRFjOCfcbQpqtWHkJ1-Vy0hEe83Ak73SBw?auto=format&w=384",
    coverImg:
      "https://i.seadn.io/gae/csTwo6-qkzy2jje1WWJQI-T0Eto5EL356rXF02QnaOcaJl1jc7na1K4kpCtAf9HHqP2tXfqxaR5y5oYRQG9VnHzkWscCIEN9FVHhoy0?auto=format&w=1920",

    sampleImgs: [
      "https://i.seadn.io/gae/uDp4rHFTuHcCu_RLNrLV6AIxGGPNhumZPHlgjHCuFJ0I6QQQ67q5JtB67UOJNqPnat0LAtRGiOj3o-0FkUmxYyYv88HPIiUt1TbNvgk?auto=format&w=384",
      "https://i.seadn.io/gae/N9yZ8VAVcwa3oJvp_jmw8C9_A4Inv0_e_cIupYPQVhmOlpN2cXHUbfqmsSxp90IqoW8iman880PjUnXyOrZBQfTkQbaBhNCtvX6--uk?auto=format&w=384",
      "https://i.seadn.io/gae/KkcmZ_sOeWdkvQUYbBNe6mtgxtEhzmMhtx_tnNzn6_IPz_N26bcMO1qEvLrUX3buoXCnRmrAMsRi4Az45ZjP7vwbffh_AkBBUqmH?auto=format&w=384",
      "https://i.seadn.io/gae/DnBvzgyR13qAng5ZHWCZLs4Ut6y-wxAYLqjFkc2Ayy_2T6lcQK5tAcjq_YWyVMbQyigKUq-strcVC8YwJeokmJ5UEh7c8-FMUGBq?auto=format&w=384",
    ],
  },
  {
    collectionName: "Empoym by ART AI",
    collectionAuthor: "Eponym",
    item: 500,
    floorPrice: 0.78,
    onSale: 20,
    owners: 260,
    isColectionVerified: true,
    isAuthorVerified: true,
    authorAvartar:
      "https://i.seadn.io/gae/-dTDrhe_0fluAn7qP4GNHFZ2h3dL4GFdp_bkBwo-YSk5NljVuf2fQ1Tw8dTNol5_a86S95Msw9PbRmaaZcFKUGCZ_TkIec5My48_JAE?auto=format&w=256",
    coverImg:
      "https://i.seadn.io/gae/t_sksGcTOymNMnf-b0B7Qr_4lMc9BdvDcphLFyN78iNXBb30VcVViwo1_xnW09z3n9hRL30SqyN4MkcsN1bb4PRiiTV7GBIsRwSwZaw?auto=format&w=1920",

    sampleImgs: [
      "https://i.seadn.io/gcs/files/085f6924493d706adba5109cff61bc5d.jpg?auto=format&w=384",
      "https://i.seadn.io/gcs/files/68f81aedb071d814502110f09a54521d.jpg?auto=format&w=384",
      "https://i.seadn.io/gcs/files/7154393e14844099f92f38b543bc9b19.jpg?auto=format&w=384",
      "https://i.seadn.io/gcs/files/e00e0d3bfa5291f9fd5170100a450adb.jpg?auto=format&w=384",
    ],
  },
  {
    collectionName: "Citizens of Bulliever Island",
    collectionAuthor: "Bullieverse",
    item: 500,
    floorPrice: 0.78,
    onSale: 20,
    owners: 260,
    isColectionVerified: true,
    isAuthorVerified: true,
    authorAvartar:
      "https://i.seadn.io/gae/Rt0eWbFv8rW_NmU3iZcfUt532pMvi0mSUmKTO-MJteEa3cJTdE26KW7uOigMWcQ1b9rcZU5UN9mGIMLwHPXaaA9u74-PIhDOH4Jhmg?auto=format&w=384",
    coverImg:
      "https://i.seadn.io/gae/0Y5-78kylODBsl1E8mL6iU6pZJXZcfkIEJaQk4q4R_b6Fc7a0bKZv4pN51I4_PeRN5AQKdHrQesSLceZ5e5V5r1TmkkWKbnjMuqhwQ?auto=format&w=256",

    sampleImgs: [
      "https://i.seadn.io/gae/ZsqU-LubzcTgDj88LtZDhedGAPYvWy4Cs9orMLGTU6loSlwTS7AAb8lrZnah0mq4k9iofSYNUmMQS_cCnExX3jZCjE_0zB_NuIW5?auto=format&w=384",
      "https://i.seadn.io/gae/4di8-tZ9FCVqYuR5y995bed_DAKsAIXJpWBVettjRGARhFJEmHBzVz0rhdvwKfb9qM47gfiZVeicLx6wVsOarHCK21GYyjtNwZdK?auto=format&w=384",
      "https://i.seadn.io/gae/hdC52iqr6mfR868g2wbDxjcTYAT02bhofMywqwyAUr8QU6Bby2-ajd6RplnHTbgQZVczqk7mRHIIF7xf7d86Oq4nv2kAzZ4dzFwnbw?auto=format&w=384",
      "https://i.seadn.io/gae/LmjAROb5RffQ6mZ3paMy_F2HtCQdd8RpwSYbqtPctfi83avTYFfWQtWNJQUNi8bEFJ5Bs7NhSWXO8beGLWlJ2hcuhZdI-6DM_rbTww?auto=format&w=384",
    ],
  },
  {
    collectionName: "CODE:0 - Genesis",
    collectionAuthor: "angelxd",
    item: 500,
    floorPrice: 0.78,
    onSale: 20,
    owners: 260,
    isColectionVerified: true,
    isAuthorVerified: true,
    authorAvartar:
      "https://i.seadn.io/gae/SFCYIPlcznnwFnI8Jd0dYIh5Atr6cp7HL4tWVWUl7_Onikq7uzQxKfTjdK2ptilWALg1ZBttSvzhXBCUbB9qoSlW9kS8qk1S3Z3xkU0?auto=format&w=256",
    coverImg:
      "https://i.seadn.io/gcs/files/fb59e0344a7bd2b1968fa19a49c4bc57.png?auto=format&w=256",

    sampleImgs: [
      "https://i.seadn.io/gcs/files/0b172535ffbfd59e584c2db1da1d83e6.png?auto=format&w=384",
      "https://i.seadn.io/gcs/files/9159af4a23d60c6edcd5958492b33c08.png?auto=format&w=384",
      "https://i.seadn.io/gcs/files/625bcacfae7ce4f7f9c03d89c886d5e7.png?auto=format&w=384",
      "https://i.seadn.io/gcs/files/20b29d56efacbc1243f669e3897ac13a.png?auto=format&w=384",
    ],
  },
];

export default function ExplorerColection() {
  return (
    <div className="mt-[80px] px-[30px]">
      <h3>explorer colection</h3>
      <div className="">
        <CollectionsCardsList collectionList={tempJson} />
      </div>
    </div>
  );
}
