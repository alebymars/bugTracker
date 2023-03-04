import React, {useState} from "react";
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
            // console.log("email", email);
            // console.log("password", password);
            const response = await fetch('http://localhost:3001/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });

            // return fetch('http://localhost:3001/api/v1/auth/login', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         email: email,
            //         password: password
            //     }),
            // }).then(async (response) => await setAppState(await response.json()));

            const data = await response.json();
            console.log("data", data);
            
            const {token} = data;
            console.log("token", token);

            if (data) {
                setAppState(data);
                dispatch(setUser({
                    id: "data.user.id",
                    email: email,
                    role: "User",
                    profilePicture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
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
}

export default LogIn;