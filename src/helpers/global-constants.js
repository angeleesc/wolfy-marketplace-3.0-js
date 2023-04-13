import { BiSortDown, BiSortUp } from "react-icons/bi"
import PoligonOficialLogo from "../components/icons/PoligonOficialLogo"
import EthereumOficialLogo from "../components/icons/EthereumOficialLogo"
import ArbitrumOficialLogo from "../components/icons/ArbitrumOficialLogo"
import OptimismOficialLogo from "../components/icons/OptimismOficialLogo"
import BinanceOficialLogo from "../components/icons/BinanceOficialLogo"

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
        value: blockchainNetwork.ethereum,
        icon: EthereumOficialLogo
    },
    {
        name: "Polygon",
        value: blockchainNetwork.polygon,
        icon: PoligonOficialLogo
    },
    {
        name: "Optimism",
        value: blockchainNetwork.optimism,
        icon: OptimismOficialLogo
    },
    {
        name: "Arbitrum",
        value: blockchainNetwork.arbitrum,
        icon: ArbitrumOficialLogo
    },
    {
        name: "Binance",
        value: blockchainNetwork.binance,
        icon: BinanceOficialLogo
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

export const rootApipaht = {
    local: "http://localhost:5000",
    porduction: "https://wolfy-server-v3-fj4ojc4eoa-uc.a.run.app"
}

export const requestEndPoints = {
    ipfs: {
        POSTuploadFile: "/api/v1/ipfs"
    },
    firebase: {
        POSTGetAsk: "/api/v1/firebase/orders-nfts",
        POSTGetAskByUser: "/api/v1/firebase/orders-by-users"
    },
    alchemy: {
        getNftsBalanceOnWalet : "/api/v1/alchemy"
    }

}


export const smartContracts = {
    ERC20: '0x7f70C459c2D3762a4BAB56d95C62a8F433f8b3C3',
    ERC721: '0xe98771e0D1e592cc8838836983fcFC13E00dD670',
    Auction: '0xfB8E92055823e6d8A32C58d806eBFB309Dda1D72',
    ERC721UUPS: '0xC78129830079d324d906c6Af0c831EEF6d04fA78',
    market: '0xcf9e4516CC6d820C58f697120E4EdD55Fcd44bD5'
}

export const stateProcessMint = {
    checking: "checking",
    success: "success",
    fail: "fail"
}

export const chainIdList = {
    "420": 420,
}

export const networkLis = {
    "optimism-goerli": "optimism-goerli"
}

export const markerOperation = {
    readyToSell: "readyToSell",
    buy: "buy",
    cancel: "cancelOrders"
}

