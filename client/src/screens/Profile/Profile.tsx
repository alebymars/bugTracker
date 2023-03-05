import React from "react";
import {useSelector} from "../../store";
import "./Profile.css"
import Header from "../../components/Header/Header";

const Profile: React.FC = (props): React.ReactElement => {
    const storeUser = useSelector(state => state.user);

    return (
        <div className="main">
            <Header title={"Profile"} />
            <p>{storeUser.email}</p>
            <p>{storeUser.role}</p>
            <img src={storeUser.profilePicture} alt="profilePicture" width="100px" height="100px"/>
        </div>
    )
}

export default Profile;
