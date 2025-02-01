import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WeatherContext } from "../../components/context/WeatherContext";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
import ForecastForHours from "../../components/ForecastForHours/ForecastForHours";
import ForecastForDay from "../../components/ForecastForDay/ForecastForDay";
import { FaArrowLeft } from "react-icons/fa";
import css from "./CityWeatherPage.module.css";

const CityWeatherPage = () => {
  const { city } = useParams();
  const { fetchWeather, weatherData, forecastData } =
    useContext(WeatherContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <button
          className={css.backButton}
          onClick={() => navigate("/favorites")}
        >
          <FaArrowLeft className={css.icon} /> Back
        </button>
      </header>
      <main className={css.main}>
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

export default CityWeatherPage;
