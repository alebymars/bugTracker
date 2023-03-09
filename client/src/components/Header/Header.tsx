import {Link, Navigate, NavLink} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
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
import {deepOrange} from "@mui/material/colors";

interface Props {
}

const Header = (props: Props) => {
    const storeUser = useSelector(state => state.user);
    const {logout} = useAuth();

    return (
        <AppBar style={{
            backgroundColor: "#333333",
        }} position="static" className="appBar">
            <Toolbar>
                {/*<IconButton*/}
                {/*    size="large"*/}
                {/*    edge="start"*/}
                {/*    color="inherit"*/}
                {/*    // aria-label="menu"*/}
                {/*    sx={{mr: 2}}*/}
                {/*>*/}
                {/*    <Link to="/">*/}
                {/*        <BugReportIcon/>*/}
                {/*    </Link>*/}
                {/*</IconButton>*/}
                <Link to="/">
                    <BugReportIcon color={"primary"} />
                </Link>
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
                    // <Button onClick={logout} style={{
                    //     color: "#cccccc"
                    // }}>Выйти</Button>
                    <Avatar
                        onMouseEnter={() => {
                            alert("В разработке")
                            document.querySelector(".avatarHeader")?.classList.add("avatarHeaderHover")
                        }}
                        className="avatarHeader"
                        // sx={{bgcolor: deepOrange[500], margin: "0 0 0 0"}}
                        alt={storeUser.email}
                        src="https://w7.pngwing.com/pngs/464/554/png-transparent-account-avatar-profile-user-avatars-icon.png"/>
                    : ""
                }
                {/*<Button onClick={logout} style={{*/}
                {/*    color: "#cccccc"*/}
                {/*}}>Выйти</Button>*/}
            </Toolbar>
        </AppBar>
    );
};

export {Header};