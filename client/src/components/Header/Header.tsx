import React from "react";

interface Props {
    title: string;
}

const Header = (props: Props) => {
    return (
        <div style={{
            width: "100%",
            height: "70px",
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
        }}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header;
