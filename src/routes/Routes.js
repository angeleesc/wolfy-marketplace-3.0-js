import { createBrowserRouter } from "react-router-dom";
import Home from "../pagers/Home";
import { Children } from "react";
import WollfyLayout from "../components/layout/WollfyLayout";
import LoginLayout from "../components/layout/LoginLayout";
import LoginWallet from "../pagers/LoginWallet";
import ExplorerNFTS from "../pagers/ExplorerNFTS";
import ColectionsExplorer from "../pagers/ColectionsExplorer";
import TokenFullInfoData from "../pagers/TokenFullInfoData";

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
            }


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
    }
])

export default router