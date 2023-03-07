import React from "react";

const Home = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
        }}>
            <h1>
                Home
            </h1>
            <h2>
                Welcome to the home page
            </h2>
            <h3>
                This page is available to everyone.
            </h3>
        </div>
    );
};

export default Home;
