import React, {useEffect, useState} from "react";
import {useDispatch} from "../../store";
import {setUser} from "../../store/actions";

const LogIn: React.FC = (props): React.ReactElement => {
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState("");
    const [appState, setAppState] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const postLoginMethod = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/auth/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();
            // console.log("data", data);

            const {token} = data;
            // console.log("token", token);

            const user = data["_doc"];
            localStorage.setItem("user", JSON.stringify(user));

            // console.log("user => ", user);

            if (data) {
                setAppState(data);
                dispatch(setUser({
                    id: user._id,
                    email: user.email,
                    role: user.role,
                    profilePicture: user.avatar,
                    isAuth: true,
                    token: data.token,
                }));
                setUserInfo(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={postLoginMethod}>LogIn</button>

            <p>
                {JSON.stringify(appState)}
            </p>
        </div>
    );
};

export default LogIn;