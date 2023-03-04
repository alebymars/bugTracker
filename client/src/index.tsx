import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LogIn from "./screens/LogIn/LogIn";
import SignUp from "./screens/SignUp/SignUp";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        {/*<LogIn/>*/}
        <SignUp/>
    </React.StrictMode>
);

reportWebVitals();
