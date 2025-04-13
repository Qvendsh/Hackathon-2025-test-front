import './Sidebar.css';
import SearchBar from "./SearchBar.tsx";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SearchBar/>
            <img
                src="https://lh3.googleusercontent.com/p/AF1QipOMur2f8cHqOSreJau_D-8LIKYxdqUwPNSOScAd=w426-h240-k-no"
                alt="Стадіон Торпедо"
                className="sidebar-image"
            />

            <div className="sidebar-content">

                <h2 className="sidebar-title">Стадіон "Торпедо"</h2>

                <div className="sidebar-rating">
                    ⭐ 3.6 <span className="gray-text">(516 відгуків)</span>
                </div>

                <div className="sidebar-info gray-text">
                    📍 вулиця Золота, 32, Львів, Львівська область, 79000
                </div>

                <div className="sidebar-distance-time gray-text">
                    🧭 3,4 км • 11 хв
                </div>

                <div className="sidebar-buttons">
                    <button className="btn blue">📍 Прокласти маршрут</button>
                    <button className="btn gray">⭐ Зберегти</button>
                    <button className="btn gray">📤 Поділитися</button>
                </div>

                <a
                    href="https://www.google.com/maps/place/%D0%A1%D1%82%D0%B0%D0%B4%D1%96%D0%BE%D0%BD+%22%D0%A2%D0%BE%D1%80%D0%BF%D0%B5%D0%B4%D0%BE%22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-link"
                >
                    Відкрити у Google Картах →
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
