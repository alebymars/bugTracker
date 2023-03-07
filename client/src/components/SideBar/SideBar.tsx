import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="form">
                <p className="itemMenu">
                    Все отчеты
                </p>
                <p className="itemMenu">
                    Мои отчеты
                </p>
                <p className="itemMenu">
                    Обновления
                </p>
            </div>
        </div>
    );
};

export default SideBar;
