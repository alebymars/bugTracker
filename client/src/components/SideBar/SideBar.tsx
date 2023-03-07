import "./SideBar.css";
import CustomLink from "../CustomLink/CustomLink";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <div className="form">
                <div
                    className="itemMenuActive"
                    // onClick={() => {
                    //     navigate("/reports");
                    // }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        zIndex: 1,
                    }}>
                    <p>
                        Все отчеты
                    </p>
                    <AddIcon style={{
                        color: "#fff",
                        cursor: "pointer",
                        padding: "0 10px 0 10px",
                        backgroundColor: "#E1E3E620",
                        borderRadius: "5px",
                        zIndex: 2,
                    }}
                             onClick={() => {
                                 navigate("/reports/new");
                             }}
                    />
                    {/*<CustomLink to={"/reports/new"} children={"Create Report"}/>*/}
                </div>
                <p className="itemMenu">
                    Мои отчеты
                </p>
                <p className="itemMenu">
                    Обновления
                </p>
            </div>
        </div>
    );
};

export default SideBar;
