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

interface Props {
    title: string;
}

const Header = (props: Props) => {
    const storeUser = useSelector(state => state.user);

    return (
        <AppBar style={{
            backgroundColor: "#333333",
        }} position="static" className="appBar">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <BugReportIcon/>
                </IconButton>
                <Typography variant="h6"
                            component="div" sx={{flexGrow: 1}}>
                    BugTracker
                </Typography>
                <CustomLink to="/">
                    Home
                </CustomLink>
                {storeUser.isAuth
                    ?
                    "" :
                    <CustomLink to="/signup">
                        SignUp
                    </CustomLink>
                }
                {storeUser.isAuth
                    ?
                    <CustomLink to="/reports/">
                        Reports
                    </CustomLink> :
                    ""}
                {storeUser.isAuth
                    ?
                    "" :
                    <CustomLink to="/login">
                        LogIn
                    </CustomLink>
                }
                <Button onClick={useAuth().logout} color="inherit">Выйти</Button>
            </Toolbar>
        </AppBar>
    );
};

export {Header};