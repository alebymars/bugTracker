import "./CustomSearch.css";

interface Props {
    handleSubmit: any;
    reportQuery: any;

}

const CustomSearch = (props: Props) => {
    return (
        <form className="searchForm" autoComplete="off" onSubmit={props.handleSubmit}>
            <input className="searchField" name="search" type="text" placeholder="Поиск"
                   defaultValue={props.reportQuery}/>
            <input className="searchButton" type="submit" value="Поиск"/>
            {/*<Button type="submit" variant="contained">Поиск</Button>*/}
        </form>
    );
};

export default CustomSearch;
