import {Link, Outlet} from "react-router-dom";
import {Header} from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./Layout.css";
import RequireAuth from "../../hoc/RequireAuth";
import {useSelector} from "../../store";

interface Props {
    title: string;
}

const Layout = (props: Props) => {
    const userStore = useSelector(state => state.user);
    return (
        <>
            <Header title={props.title}/>
            <div className="layout">
                {userStore.isAuth && <SideBar/>}
                <Outlet/>
            </div>
        </>
    );
};

export {Layout};
