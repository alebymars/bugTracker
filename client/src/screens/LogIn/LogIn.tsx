import React, {useState} from "react";

const LogIn: React.FC = (props): React.ReactElement => {
    const [appState, setAppState] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const postLoginMethod = async () => {
        try {
            console.log("email", email);
            console.log("password", password);

            return fetch('http://localhost:3001/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            }).then(async (response) => await setAppState(await response.json()));
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
                {typeof appState === 'object' ? JSON.stringify(appState) : appState}
            </p>
        </div>
    );
}

export default LogIn;
