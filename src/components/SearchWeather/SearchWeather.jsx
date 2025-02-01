import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import css from "./SearchWeather.module.css";

const SearchWeather = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      onSearch(searchCity.trim());
      setSearchCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchContainer}>
      <input
        type="text"
        placeholder="Enter city"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        className={css.searchInput}
      />
      <button type="submit" className={css.searchButton}>
        <FaSearch className={css.icon} />
      </button>
    </form>
  );
};

export default SearchWeather;
