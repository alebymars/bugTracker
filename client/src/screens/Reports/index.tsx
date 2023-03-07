import React, {useState, useEffect, useLayoutEffect} from "react";
import {useDispatch, useSelector} from "../../store";
import axios from "axios";
import "./Reports.css";
import CustomLink from "../../components/CustomLink/CustomLink";
import {setUser} from "../../store/actions";
import {useAuth} from "../../hook/useAuth";

interface Props {

}

const Reports = (props: Props) => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.user.token);
    const [reports, setReports] = useState<any>([]);
    // console.log("token => ", token);


    useLayoutEffect(() => {
        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };

            // token && axios.get("http://localhost:3001/api/v1/reports", {headers}).then((response) => {
            //     console.log("response => ", response.data);
            //     setReports(response.data);
            // }).catch((error) => {
            //     dispatch(setUser({
            //         id: "",
            //         email: "",
            //         role: "",
            //         profilePicture: "",
            //         isAuth: false,
            //         token: "",
            //     }));
            //     console.log("error => ", error);
            // });

            token && fetch("http://localhost:3001/api/v1/reports", {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("data => ", data);
                    setReports(data);
                });

        } catch (error) {
            console.error(error);
        }
    }, [token]);


    return (
        <div className="reports">
            <CustomLink to={"new"} children={"Create Report"}/>
            {reports.map((report: any) => {
                return (
                    <div className="cardReport" key={report._id}>
                        <p>{report.title}</p>
                        <p>{report.userId}</p>
                        <p>Product: {report.product}</p>
                        <div className="tags">
                            {report.tags.map((item: any) => {
                                return (
                                    <p style={{
                                        marginRight: "5px",
                                        backgroundColor: "orange",
                                        padding: "5px",
                                        borderRadius: "10px",
                                        color: "white"
                                    }} key={item}>
                                        {item}
                                    </p>
                                );
                            })}
                        </div>
                        <CustomLink to={`/reports/${report._id}`}>View Report</CustomLink>
                    </div>
                );
            })}
        </div>
    );
};

export default Reports;