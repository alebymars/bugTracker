import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./styles.css";
import {StoreProvider} from "./store";
import LogIn from "./screens/LogIn/LogIn";
import SignUp from "./screens/SignUp/SignUp";
import {ErrorPage} from "./screens/ErrorPage/ErrorPage";
import Profile from "./screens/Profile/Profile";
import {Reports} from "./screens/Reports";
import {Layout} from "./components/Layout/Layout";
import ReportView from "./screens/ReportView/ReportView";
import CreateReport from "./screens/CreateReport/CreateReport";
import EditReport from "./screens/EditReport/EditReport";
import RequireAuth from "./hoc/RequireAuth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout title={"Test"}/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "login",
                element: <LogIn/>,
            },
            {
                path: "signup",
                element: <SignUp/>,
            },
            {
                path: "profile",
                element:
                    <RequireAuth>
                        <Profile/>
                    </RequireAuth>,
            },
            {
                path: "products",
                element:
                    <RequireAuth>
                        <div>Products</div>
                    </RequireAuth>,
            },
            {
                path: "reports",
                // loader: () => import("./screens/Reports"),
                element:
                    <RequireAuth>
                        <Reports/>
                    </RequireAuth>,
            },
            {
                path: "reports/:id",
                element:
                    <RequireAuth>
                        <ReportView/>
                    </RequireAuth>,
            },
            {
                path: "reports/:id/edit",
                element:
                    <RequireAuth>
                        <EditReport/>
                    </RequireAuth>,
            },
            {
                path: "reports/new",
                element:
                    <RequireAuth>
                        <CreateReport/>
                    </RequireAuth>,
            },
        ]
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
