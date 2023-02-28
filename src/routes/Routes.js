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
import { staticRoutes } from "../helpers/static-routes";
import ResurcesPage from "../pagers/ResurcesPage";




const router = createBrowserRouter([
    {
        path: staticRoutes.root,
        element: <WollfyLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: staticRoutes.exporersNfts,
                element: <ExplorerNFTS />
            },
            {
                path: staticRoutes.exporersColections,
                element: <ColectionsExplorer />
            },
            {
                path: "token/:id",
                element: <TokenFullInfoData />
            },
            {
                path: staticRoutes.colectionInfoData(),
                element: <ExplorerCollectionERC721 />
            },
            {
                path: staticRoutes.userData(),
                element: <UserProfile />
            },
            {
                path: staticRoutes.resources,
                element: <ResurcesPage/> 
            }


        ]

    },
    {
        path: "/",
        element: <WollfyLayout isProtected={true} />,
        children: [
            {
                path: staticRoutes.createNft,
                element: <MintNewNft />
            },
            {
                path: staticRoutes.checkout,
                element: <CheckoutPage />
            },
            {
                path: staticRoutes.profile(),
                element: <UserProfile />
            },
            {
                path: staticRoutes.sellNft,
                element: <ListNftToMarketPlace />
            },

        ]
    },
    {
        path: "/",
        element: <LoginLayout />,
        children: [
            {
                path:staticRoutes.login,
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