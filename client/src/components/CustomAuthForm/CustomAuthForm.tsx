import "./CustomAuthForm.css";

interface Props {
    passwordPlaceholder: any;
    emailPlaceholder: any;
    handleLogin: (event: any) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    buttonTitle: string;
}

const CustomAuthForm = (props: Props) => {
    return (
        <form autoComplete="off" className="loginForm" onSubmit={props.handleLogin}>
            <input
                className="emailField"
                placeholder={props.emailPlaceholder}
                name="email"
                type="text"
                value={props.email}
                onChange={e => {
                    props.setEmail(e.target.value);
                }}
            />
            <input
                className="passwordField"
                placeholder={props.passwordPlaceholder}
                name="password"
                type="password"
                value={props.password}
                onChange={e => {
                    props.setPassword(e.target.value);
                }}
            />
            <input className="loginButton" type="submit" value={props.buttonTitle}/>
        </form>
    );
};

export default CustomAuthForm;
