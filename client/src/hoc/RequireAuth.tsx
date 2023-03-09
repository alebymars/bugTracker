import {useLocation, Navigate} from "react-router-dom";
import {isRestored, useSelector} from "../store";
import {useEffect} from "react";

interface Props {
    children: any;
}

const RequireAuth = (props: Props) => {
    const restored = isRestored();
    const location = useLocation();
    // const token = useSelector(state => state.user.token);
    const user = useSelector(state => state.user);
    const localStorageUser = localStorage.getItem("user");
    // console.log("localStorageUser => ", localStorageUser);

    useEffect(() => {
        console.log("restored => ", restored);
    }, [restored]);

    if (!restored) {
        return <Navigate to={`/login?redirectTo=${location.pathname}`} state={{from: location}}/>;
    }

    // console.log("token => ", token);
    // console.log("user => ", user.isAuth);

    // if (!user.isAuth) {
    //     return <Navigate to={`/login?redirectTo=${location.pathname}`} state={{from: location}}/>;
    // }
    // временное решение, пока Ваня не сделает новый хук в своей библиотеке
    // if (!localStorageUser) {
    //     return <Navigate to={`/login?redirectTo=${location.pathname}`} state={{from: location}}/>;
    // }

    return props.children;
};

export default RequireAuth;