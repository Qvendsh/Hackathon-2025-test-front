import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
                type="text"
                placeholder="Пошук Google Карти"
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;