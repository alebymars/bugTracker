import React, {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useDispatch} from "../../store";
import {setUser} from "../../store/actions";
import "./LogIn.css";
import CustomAuthForm from "../../components/CustomAuthForm/CustomAuthForm";

const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event: any) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;

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
        const user = data["_doc"];
        // console.log("user => ", user);

        if (data) {
            dispatch(setUser({
                id: user._id,
                email: user.email,
                role: user.role,
                profilePicture: user.avatar,
                isAuth: true,
                token: data.token,
            }));
            localStorage.setItem("user", JSON.stringify({
                id: user._id,
                email: user.email,
                role: user.role,
                profilePicture: user.avatar,
                isAuth: true,
                token: data.token,
            }));
            navigate(fromPage);
        }
    };


    return (
        <div className="cardFormLogin">
            {/*<Header title={"LogIn"} />*/}
            <h1>
                LogIn
            </h1>
            <CustomAuthForm
                handleLogin={handleLogin}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                buttonTitle={"Войти"}
                emailPlaceholder={"Email"}
                passwordPlaceholder={"Пароль"}
            />
            {/*<form autoComplete="off" className="loginForm" onSubmit={handleLogin}>*/}
            {/*    <input className="emailField" name="email" type="text" value={email}*/}
            {/*           onChange={e => setEmail(e.target.value)}/>*/}
            {/*    <input className="passwordField" name="password" type="password" value={password}*/}
            {/*           onChange={e => setPassword(e.target.value)}/>*/}
            {/*    <input className="loginButton" type="submit" value="Поиск"/>*/}
            {/*</form>*/}
            {/*{fromPage}*/}
        </div>
    );
};

export default LogIn;