import {Button, TextField} from "@mui/material";
import "./CustomSearch.css";

interface Props {
    handleSubmit: any;
    reportQuery: any;

}

const CustomSearch = (props: Props) => {
    return (
        <form className="searchForm" autoComplete="off" onSubmit={props.handleSubmit}>
            {/*<TextField*/}
            {/*    sx={{*/}
            {/*        marginRight: "10px",*/}
            {/*        borderRadius: "5px",*/}
            {/*        width: "95%",*/}
            {/*        textDecorationColor: "#E1E3E6",*/}
            {/*        "& .MuiInputBase-input": {*/}
            {/*            borderRadius: 4,*/}
            {/*            position: "relative",*/}
            {/*            backgroundColor: "#2b2b2b",*/}
            {/*            border: "1px solid #ced4da",*/}
            {/*            fontSize: 16,*/}
            {/*            width: "auto",*/}
            {/*            color: "#E1E3E6",*/}
            {/*        },*/}
            {/*        "& .MuiOutlinedInput-root": {*/}
            {/*            "& fieldset": {*/}
            {/*                // borderColor: "#2b2b2b",*/}
            {/*                backgroundColor: "#333333",*/}
            {/*                border: "1px solid #E1E3E6",*/}
            {/*                color: "#E1E3E6",*/}
            {/*            },*/}
            {/*            "&:hover fieldset": {*/}
            {/*                // borderColor: "#2b2b2b",*/}
            {/*                border: "1px solid #E1E3E6",*/}
            {/*                color: "#E1E3E6",*/}
            {/*            },*/}
            {/*            "&.Mui-focused fieldset": {*/}
            {/*                // borderColor: "#2b2b2b",*/}
            {/*                border: "1px solid #E1E3E6",*/}
            {/*                color: "#E1E3E6",*/}
            {/*            },*/}
            {/*            "& .MuiOutlinedInput-notchedOutline": {*/}
            {/*                // borderColor: "#2b2b2b",*/}
            {/*                border: "1px solid #E1E3E6",*/}
            {/*                color: "#E1E3E6",*/}
            {/*            },*/}
            {/*        },*/}
            {/*    }}*/}
            {/*    size={"small"}*/}
            {/*    name="search"*/}
            {/*    label="Search"*/}
            {/*    variant="outlined"*/}
            {/*    defaultValue={props.reportQuery}*/}
            {/*/>*/}
            <input className="searchField" name="search" type="text" placeholder="Поиск"
                   defaultValue={props.reportQuery}/>
            <input className="searchButton" type="submit" value="Поиск"/>
            {/*<Button type="submit" variant="contained">Поиск</Button>*/}
        </form>
    );
};

export default CustomSearch;
