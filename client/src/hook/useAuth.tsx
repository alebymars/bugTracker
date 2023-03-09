import {useDispatch, useSelector} from "../store";
import {setUser} from "../store/actions";
import {useNavigate} from "react-router-dom";


export function useAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const login = () => {
        dispatch(setUser({
            id: user.id,
            email: user.email,
            role: user.role,
            profilePicture: user.profilePicture,
            isAuth: true,
            token: user.token,
        }));
    };

    const logout = () => {
        dispatch(setUser({
            id: "",
            email: "",
            role: "",
            profilePicture: "",
            isAuth: false,
            token: "",
        }));
        localStorage.removeItem("user");
        localStorage.removeItem("context-store");
        navigate("/", {replace: true});
        return true;
    };

    return {login, logout, user};
}