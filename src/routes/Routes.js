import { createBrowserRouter } from "react-router-dom";
import Home from "../pagers/Home";
import { Children } from "react";
import WollfyLayout from "../components/layout/WollfyLayout";
import LoginLayout from "../components/layout/LoginLayout";
import LoginWallet from "../pagers/LoginWallet";
import ExplorerNFTS from "../pagers/ExplorerNFTS";
import ColectionsExplorer from "../pagers/ColectionsExplorer";
import TokenFullInfoData from "../pagers/TokenFullInfoData";
import Page404 from "../pagers/Page404";
import ExplorerCollectionERC721 from "../pagers/ExplorerCollectionERC721";
import MintNewNft from "../pagers/MintNewNft";
import CheckoutPage from "../pagers/CheckoutPage";
import UserProfile from "../pagers/profile/UserProfile";
import ListNftToMarketPlace from "../pagers/ListNftToMarketPlace";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WollfyLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "explorer-nfts",
                element: <ExplorerNFTS />
            },
            {
                path: "explorer-collections",
                element: <ColectionsExplorer />
            },
            {
                path: "token/:id",
                element: <TokenFullInfoData />
            },
            {
                path: "collection/:id",
                element: <ExplorerCollectionERC721 />
            },
            {
                path: "user/:id",
                element: <UserProfile />
            },
        

        ]

    },
    {
        path: "/",
        element: <WollfyLayout isProtected={true} />,
        children: [
            {
                path: "create-new-nft",
                element: <MintNewNft />
            },
            {
                path: "checkout",
                element: <CheckoutPage />
            },
            {
                path: "profile/:id",
                element: <UserProfile />
            },
            {
                path: "sell-nft",
                element: <ListNftToMarketPlace/>
            },

        ]
    },
    {
        path: "/",
        element: <LoginLayout />,
        children: [
            {
                path: "login",
                element: <LoginWallet />
            }
        ]
    },
    {
        path: "*",
        element: <Page404 />
    }
])

export default router