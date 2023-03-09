import {Outlet, useLocation} from "react-router-dom";
import {Header} from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import {useSelector} from "../../store";
import "./Layout.css";
import Home from "../../screens/Home/Home";

// import RequireAuth from "../../hoc/RequireAuth";

interface Props {
    title: string;
}

const Layout = (props: Props) => {
    const userStore = useSelector(state => state.user);
    const location = useLocation();
    // console.log(location);
    return (
        <>
            <Header/>
            <div className="layout">
                {userStore.isAuth && location.pathname !== "/" && location.pathname !== "/profile" ? <SideBar/> : ""}
                {location.pathname === "/" ? <Home/> : <Outlet/>}
            </div>
        </>
    );
};

export {Layout};
