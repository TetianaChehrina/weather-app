import { useState, useContext, useEffect } from "react";
import { WeatherContext } from "../../components/context/WeatherContext";
import SearchWeather from "../../components/SearchWeather/SearchWeather";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
import ForecastForHours from "../../components/ForecastForHours/ForecastForHours";
import ForecastForDay from "../../components/ForecastForDay/ForecastForDay";
import { Link } from "react-router-dom";
import { FaBars, FaMapMarkerAlt } from "react-icons/fa";
import css from "./HomePage.module.css";

const HomePage = () => {
  const { fetchWeather, weatherData, forecastData, addToFavorites } =
    useContext(WeatherContext);
  const [city, setCity] = useState("Kyiv");
  const [isLocationInputVisible, setIsLocationInputVisible] = useState(false);

  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/favorites">
            <FaBars className={css.icon} />
          </Link>

          <button
            onClick={() => addToFavorites(weatherData[city])}
            className={css.addToFavorites}
          >
            Add to Favorites
          </button>

          <button
            className={css.locationInfo}
            onClick={() => setIsLocationInputVisible(!isLocationInputVisible)}
          >
            <FaMapMarkerAlt className={css.icon} />
          </button>
        </nav>
      </header>
      <main className={css.main}>
        {isLocationInputVisible && (
          <div className={css.searchSection}>
            <SearchWeather onSearch={(newCity) => setCity(newCity)} />
          </div>
        )}

        {weatherData[city] && (
          <WeatherDetails weatherData={weatherData[city]} />
        )}
        {forecastData[city] && (
          <>
            <ForecastForHours forecastData={forecastData[city]} />
            <ForecastForDay forecastData={forecastData[city]} />
          </>
        )}
      </main>
    </div>
  );
};

export default HomePage;
