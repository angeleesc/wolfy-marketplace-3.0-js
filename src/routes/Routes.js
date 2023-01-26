import { createBrowserRouter } from "react-router-dom";
import Home from "../pagers/Home";
import { Children } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
       
    }
])

export default router