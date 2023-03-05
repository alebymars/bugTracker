import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import {StoreProvider} from "./store";
import LogIn from "./screens/LogIn/LogIn";
import SignUp from "./screens/SignUp/SignUp";
import {ErrorPage} from "./screens/ErrorPage/ErrorPage";
import Profile from "./screens/Profile/Profile";
import Header from "./components/Header/Header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div><Header title={"Main"} /> BugTracker App</div>,
        errorElement: <ErrorPage/>,
        // children: [
        //     {
        //         path: "/reports",
        //         element: <div>Reports</div>,
        //     }
        // ]
    },
    {
        path: "/login",
        element: <LogIn/>,
    },
    {
        path: "/signup",
        element: <SignUp/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },
    {
        path: "/reports",
        element: <div>Reports</div>,
    },
    {
        path: "/products",
        element: <div>Products</div>,
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <StoreProvider>
            <RouterProvider router={router}/>
        </StoreProvider>
    </React.StrictMode>
);
