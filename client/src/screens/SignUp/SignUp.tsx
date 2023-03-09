import React, {useState} from "react";
import CustomAuthForm from "../../components/CustomAuthForm/CustomAuthForm";
import "./SignUp.css";

const SignUp = () => {
    const [appState, setAppState] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const postSignUpMethod = async () => {
        try {
            console.log("email", email);
            console.log("password", password);

            return fetch("http://localhost:3001/api/v1/auth/register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    isActivated: false,
                    activationLink: "{link:port}/activate/}",
                    avatar: "https://www.gravatar.com/av",
                    role: "User",
                    // resetPasswordLink: '{link:port}/reset-password/{token}'
                }),
            }).then(async (response) => await setAppState(await response.json()));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="cardFormLogin">
            <h1>
                SignUp
            </h1>
            <CustomAuthForm
                passwordPlaceholder={"Пароль"}
                emailPlaceholder={"Email"}
                handleLogin={postSignUpMethod}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                buttonTitle={"Зарегистрироваться"}
            />
            {/*<input type="text" value={email} onChange={e => setEmail(e.target.value)}/>*/}
            {/*<input type="text" value={password} onChange={e => setPassword(e.target.value)}/>*/}
            {/*<button onClick={postSignUpMethod}>Register</button>*/}
            <p>
                {typeof appState === "object" ? JSON.stringify(appState) : appState}
            </p>
        </div>
    );
};

export default SignUp;