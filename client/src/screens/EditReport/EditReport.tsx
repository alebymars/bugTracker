import {useParams} from "react-router-dom";

const EditReport = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>
                EditReport {id}
            </h1>
        </div>
    )
}

export default EditReport;
