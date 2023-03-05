import { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import { useSelector } from '../../store';
import axios from 'axios';
import "./Reports.css"

interface Props {
}

const Reports = (props: Props) => {
    const token = useSelector(state => state.user.token);
    console.log("token => ", token);

    const [reports, setReports] = useState<any>([]);

    useEffect(() => {
        // getReports();
    }, [])

    const getReports = async () => {
        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }

            axios.get("http://localhost:3001/api/v1/reports", {headers}).then((response) => {
                console.log("response => ", response.data);
                setReports(response.data);
            }).catch((error) => {
                console.log("error => ", error);
            });
            

            // const data = await (await response).json();
            // console.log("data", data);

            // if (data) {
            //     setReports(data);
            //     // setAppState(data);
            //     // dispatch(setUser({
            //     //     id: user._id,
            //     //     email: user.email,
            //     //     role: user.role,
            //     //     profilePicture: user.avatar,
            //     //     isAuth: true,
            //     //     token: data.token,
            //     // }));
            //     // setUserInfo(data);
            // }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <Header title={"Reports"} />
            <button onClick={getReports}>Get Reports</button>
            <p>
                {reports.map((report: any) => {
                    return (
                        <div className='cardReport'>
                            <p>{report._id}</p>
                            <p>{report.title}</p>
                            <p>{report.userId}</p>
                            <p>{report.product}</p>
                            <p>{report.issueType}</p>
                            <p>{report.steps}</p>
                            <p>{report.actualResult}</p>
                            <p>{report.expectedResult}</p>
                            <p>{report.tags}</p>
                            <p>{report.priority}</p>
                            <p>{report.priority}</p>
                            <p>{report.device}</p>
                            <p>{report.os}</p>
                        </div>
                    )
                })
                }
            </p>
        </div>
    )
};

export default Reports;
