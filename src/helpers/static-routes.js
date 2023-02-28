export const staticRoutes = {
    root: "/",
    exporersNfts: "explorer-nfts",
    exporersColections: "explorer-collections",
    tokenInfoData: (id)=> `/token/${id?id:":id"}`,
    colectionInfoData: (id)=> `/collection/${id?id:":id"}`,
    userData: (id)=> `user/${id?id:":id"}`,
    createNft: "create-new-nft",
    checkout: "checkout",
    profile: (id)=> `profile/${id?id:":id"}`,
    sellNft: "sell-nft",
    login: "login",
    resources: "resources"
}