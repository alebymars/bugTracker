import React from "react";
import {useLocation, Navigate} from "react-router-dom";
import {useSelector} from "../store";

interface Props {
    children: any;
}

const RequireAuth = (props: Props) => {
    const location = useLocation();
    const token = useSelector(state => state.user.token);
    const user = useSelector(state => state.user);

    console.log("token => ", token);
    console.log("user => ", user.isAuth);

    if (!user.isAuth) {
        return <Navigate to={`/login?redirectTo=${location.pathname}`} state={{from: location}}/>;
    }

    return props.children;
};

export default RequireAuth;