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

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>BugTracker App</div>,
        errorElement: <ErrorPage />,
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
        element: <div>Profile</div>,
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
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <StoreProvider>
            <RouterProvider router={router}/>
        </StoreProvider>
    </React.StrictMode>
);
