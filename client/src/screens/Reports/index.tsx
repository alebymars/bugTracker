import React, {useState, useEffect, useLayoutEffect} from "react";
import {useDispatch, useSelector} from "../../store";
import axios from "axios";
import "./Reports.css";
import CustomLink from "../../components/CustomLink/CustomLink";
import {setUser} from "../../store/actions";
import {useAuth} from "../../hook/useAuth";
import {Link} from "react-router-dom";

interface Props {

}

const Reports = (props: Props) => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.user.token);
    const [reports, setReports] = useState<any>([]);
    // console.log("token => ", token);

    const dateTime = (date: string) => {
        const day = date.slice(8, 10);
        const month = date.slice(5, 7);
        const year = date.slice(0, 4);
        const time = date.slice(11, 16);
        return `${day}.${month}.${year} ${time}`;
    }


    useLayoutEffect(() => {
        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };

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
            {/*<CustomLink to={"new"} children={"Create Report"}/>*/}
            {reports.map((report: any) => {
                return (
                    <div className="cardReport" key={report._id}>
                        <Link to={`/reports/${report._id}`} className="reportTitle">{report.title}</Link>
                        <div className="tags">
                            {report.tags.map((item: any) => {
                                return (
                                    <p style={{
                                        marginRight: "5px",
                                        backgroundColor: "#E1E3E620",
                                        padding: "2px 5px 2px 5px",
                                        borderRadius: "5px",
                                        color: "white"
                                    }} key={item}>
                                        {item}
                                    </p>
                                );
                            })}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "row",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    marginTop: "10px",
                                    flexDirection: "row",
                                }}
                            >
                                <p className="reportDatetime">{report.date && dateTime(`${report.date}`)}</p>
                                <p className="reportUsername">·</p>
                                <p className="reportUsername">{report.userId}</p>
                            </div>
                            <div>
                                <p className="reportPriority">{report.priority}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Reports;