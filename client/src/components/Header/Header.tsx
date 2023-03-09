import React, {useState} from "react";
import {Link, Navigate, NavLink, useNavigate} from "react-router-dom";
import {Fade, Menu, MenuItem} from "@mui/material";
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

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <BugReportIcon color={"inherit"}/>
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
                        onClick={handleMenu}
                        className="avatarHeader"
                        // sx={{bgcolor: deepOrange[500], margin: "0 0 0 0"}}
                        alt={storeUser.email}
                        src={storeUser.profilePicture}/>
                    : ""
                }
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    sx={{
                        marginTop: "40px",
                        // color: "#cccccc",
                    }}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem
                        onClick={() => {
                            navigate("/profile");
                            handleClose();
                        }}>Профиль</MenuItem>
                    <MenuItem onClick={() => {
                        logout();
                        handleClose();
                    }}>Выйти</MenuItem>
                </Menu>
                {/*<Button onClick={logout} style={{*/}
                {/*    color: "#cccccc"*/}
                {/*}}>Выйти</Button>*/}
            </Toolbar>
        </AppBar>
    );
};

export {Header};