import {Link, useMatch} from "react-router-dom";

interface Props {
    to: string;
    children: any;
}

const CustomLink = (props: Props) => {
    const match = useMatch({
        path: props.to,
        end: props.to.length === 1,
    });
    // console.log("match => ", match);
    return (
        <Link
            to={props.to}
            style={{
                color: match ? "#E1E3E6" : "#828282",
            }}
        >
            {props.children}
        </Link>
    );
};

export default CustomLink;
