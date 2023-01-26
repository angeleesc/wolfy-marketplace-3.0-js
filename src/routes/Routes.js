import { createBrowserRouter } from "react-router-dom";
import Home from "../pagers/Home";
import { Children } from "react";
import WollfyLayout from "../components/layout/WollfyLayout";
import LoginLayout from "../components/layout/LoginLayout";
import LoginWallet from "../pagers/LoginWallet";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WollfyLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]

    },
    {
        path:"/",
        element: <LoginLayout/>,
        children: [
            {
                path:"login",
                element: <LoginWallet/>
            }
        ]
    }
])

export default router