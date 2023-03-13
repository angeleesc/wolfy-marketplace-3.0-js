import { BiSortDown, BiSortUp } from "react-icons/bi"

export const saleMethod = {
    sales: "sales",
    auction: "auction",
    openBid: "open-bid"
}

export const collectionsOptions = {
    wolfy: "wolfy-g-collection",
    new: "new-colecion",
    existing: "existing-collections"
}

export const blockchainNetwork = {
    optimism: "optimism",
    arbitrum: "arbitrum",
    binance: "binance",
    ethereum: "ethereum",
    polygon: "polygon",
}

export const itemDetaisTabOption = {
    history: "history",
    bid: "bid"
}

export const historyType = {
    listing: "listing",
    mint: "mint",
    sell: "sell",
    transfer: "transfer"

}

export const sortByType = {
    priceAsc: "price-asc",
    priceDesc: "price-desc",
    dateAsc: "date-asc",
    dateDesc: "date-desc"
}

export const socialNetworks = {
    facebook: "facebook",
    instagram: "instagram",
    twitch: "twitch",
    behance: "behance",
    twitter: "twitter",
    discord: "discord",
    youtube: "youtube",


}

export const blockChainLisoption = [
    {
        name: "Ethereum",
        value: blockchainNetwork.ethereum
    },
    {
        name: "Polygon",
        value: blockchainNetwork.polygon,
    },
    {
        name: "Optimism",
        value: blockchainNetwork.optimism
    },
    {
        name: "Arbitrum",
        value: blockchainNetwork.arbitrum
    },
    {
        name: "Binance",
        value: blockchainNetwork.binance
    }
];

export const saleMethodOptions = [
    {
        name: "venta",
        value: saleMethod.sales,
    },
    {
        name: "Subasta",
        value: saleMethod.auction,
    },

]


export const sortByOption = [
    {
        name: "precio",
        value: sortByType.priceAsc,
        icon: BiSortUp,


    },
    {
        name: "precio",
        value: sortByType.priceDesc,
        icon: BiSortDown

    },
    {
        name: "Mas atiguo",
        value: sortByType.dateAsc,
        icon: BiSortUp

    },
    {
        name: "Mas nuevo",
        value: sortByType.dateDesc,
        icon: BiSortDown
    }

]