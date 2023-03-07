import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "../../store";

const ReportView = () => {
    const {id} = useParams();
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
        <div>
            {
                reports && (
                    <>
                        <h1>{reports.title}</h1>
                        <p>{reports.product}</p>
                        <Link to={`/reports/${reports._id}/edit`}>Edit</Link>
                    </>
                )
            }
        </div>
    );
};

export default ReportView;
