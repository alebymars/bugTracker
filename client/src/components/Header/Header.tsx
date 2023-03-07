import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BugReportIcon from "@mui/icons-material/BugReport";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";
import {useAuth} from "../../hook/useAuth";
import {useSelector} from "../../store";
import {Link, Navigate, NavLink} from "react-router-dom";

interface Props {}

const Header = (props: Props) => {
    const storeUser = useSelector(state => state.user);
    const {logout} = useAuth();

    return (
        <AppBar style={{
            backgroundColor: "#333333",
        }} position="static" className="appBar">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    // aria-label="menu"
                    sx={{mr: 2}}
                >
                    <Link to="/">
                        <BugReportIcon/>
                    </Link>
                </IconButton>
                <Typography variant="h6"
                            component="div" sx={{flexGrow: 1}}>
                    BugTracker
                </Typography>
                <CustomLink to="/">
                    Главная
                </CustomLink>
                {storeUser.isAuth
                    ?
                    "" :
                    <CustomLink to="/signup">
                        Создать аккаунт
                    </CustomLink>
                }
                {storeUser.isAuth
                    ?
                    <CustomLink to="/reports/">
                        Отчёты
                    </CustomLink> :
                    ""}
                {storeUser.isAuth
                    ?
                    "" :
                    <CustomLink to="/login">
                        Войти
                    </CustomLink>
                }
                {storeUser.isAuth
                    ?
                    // <NavLink onClick={logout} to={"/"}>
                    //     Выйти
                    // </NavLink> : ""
                    <Button onClick={logout} style={{
                        color: "#cccccc"}}>Выйти</Button> : ""
                }
            </Toolbar>
        </AppBar>
    );
};

export {Header};