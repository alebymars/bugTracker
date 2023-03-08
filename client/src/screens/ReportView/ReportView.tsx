import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import {useSelector} from "../../store";
import "./ReportView.css";

const ReportView = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const token = useSelector(state => state.user.token);
    const [reports, setReports] = useState<any>(null);

    useEffect(() => {
        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };

            axios.get(`http://localhost:3001/api/v1/reports/${id}`, {headers}).then((response) => {
                console.log("response => ", response.data);
                setReports(response.data);
            }).catch((error) => {
                console.log("error => ", error);
            });

        } catch (error) {
            console.error(error);
        }
    }, [id]);

    return (
        <div
            className="reportView"
        >
            {
                reports && (
                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "20px",
                                flexDirection: "row"
                            }}
                        >
                            <p className="reportTitlePreview">{reports.title}</p>
                            <EditIcon
                                onClick={() => {
                                    navigate(`/reports/${reports._id}/edit`);
                                }}
                                style={{
                                    color: "#cccccc",
                                    cursor: "pointer",
                                    fontSize: "25px"
                                }}/>
                        </div>
                        <p className="reportBold">Шаги воспроизведения: </p>
                        <div>
                            {reports.steps.map((item: any, index: any) => {
                                return (
                                    <p key={index} className="reportSteps">
                                        {index + 1}. {item}
                                    </p>
                                );
                            })}
                        </div>
                        <p className="reportBold">Фактический результат: <p
                            className="reportOrdinary">{reports.actualResult}</p></p>
                        <p className="reportBold">Ожидаемый результат: <p
                            className="reportOrdinary">{reports.expectedResult}</p></p>
                        {/*<p>Прикрепленные файлы: (soon...)</p>*/}
                        <hr/>
                        <div
                            className="reportBasicInfo"
                        >
                            <p className="reportBasicTitle">Продукт:</p>
                            <p className="reportBasicBodyLink">{reports.product}</p>
                        </div>
                        <div
                            className="reportBasicInfo"
                        >
                            <p className="reportBasicTitle">Платформа:</p>
                            <p className="reportBasicBodyLink">{reports.platform}</p>
                        </div>
                        <div
                            className="reportBasicInfo"
                        >
                            <p className="reportBasicTitle">Версия продукта:</p>
                            <p className="reportBasicBodyLink">{reports.versionProduct}</p>
                        </div>
                        <div
                            className="reportBasicInfo"
                        >
                            <p className="reportBasicTitle">Версия ОС:</p>
                            <p className="reportBasicBodyLink">{reports.os}</p>
                        </div>
                        <div
                            className="reportBasicInfo"
                        >
                            <p className="reportBasicTitle">Теги:</p>
                            {/*<p className="reportBasicBody">{reports.tags}</p>*/}
                            <div className="reportBasicTags">
                                {reports.tags.map((tags: any) => {
                                    return (
                                        <p className="reportBasicBgTag">
                                            <p className="reportBasicBodyLink">{tags}</p>
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                        <div
                            className="reportBasicInfo"
                        >
                            <p className="reportBasicTitle">Статус:</p>
                            <p className="reportBasicBody">{reports.status}</p>
                        </div>
                        <div
                            className="reportBasicInfo"
                        >
                            <p className="reportBasicTitle">Тип проблемы:</p>
                            <p className="reportBasicBodyLink">{reports.issueType}</p>
                        </div>
                        <div
                            className="reportBasicInfo"
                        >
                            <p className="reportBasicTitle">Приоритет:</p>
                            <p className="reportBasicBody">{reports.priority}</p>
                        </div>
                        <div
                            className="reportBasicInfo"
                        >
                            <p className="reportBasicTitle">Устройство:</p>
                            <p className="reportBasicBody">{reports.device}</p>
                        </div>
                        {/*<Link to={`/reports/${reports._id}/edit`}>Edit</Link>*/}
                    </div>
                )
            }
        </div>
    );
};

export default ReportView;
