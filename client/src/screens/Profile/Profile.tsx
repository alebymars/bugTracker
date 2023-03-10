import React from "react";
import { useSelector } from "../../store";
import "./Profile.css"
import {Header} from "../../components/Header/Header";

const Profile = () => {
    const storeUser = useSelector(state => state.user);

    return (
        <div className="main">
            {/*<Header title={"Profile"} />*/}
            <div className="blockInfo">
                <img src={storeUser.profilePicture} alt={storeUser.email} width="100px" height="100px" style={{
                    borderRadius: "50%",
                }} />
                <div className="userInfo">
                    <p>email: {storeUser.email}</p>
                    <p>role: {storeUser.role}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
