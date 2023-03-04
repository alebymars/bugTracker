import React from 'react';
import ReactDOM from 'react-dom/client';
import {StoreProvider} from "./store";
import LogIn from "./screens/LogIn/LogIn";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <StoreProvider>
            <LogIn/>
        </StoreProvider>
    </React.StrictMode>
);

