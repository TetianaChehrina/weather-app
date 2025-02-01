import { createContext, useState, useEffect } from "react";
import { fetchWeatherData, fetchForecastData } from "../Api/Api.jsx";
import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "../../utils/localStorage.jsx";
import { toast } from "react-toastify";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [favorites, setFavorites] = useState(getFavoritesFromStorage());

  useEffect(() => {
    saveFavoritesToStorage(favorites);
  }, [favorites]);

  const fetchWeather = async (city) => {
    if (!city || weatherData[city]) return;
    try {
      const weather = await fetchWeatherData(city);
      const forecast = await fetchForecastData(city);

      setWeatherData((prev) => ({ ...prev, [city]: weather }));
      setForecastData((prev) => ({ ...prev, [city]: forecast }));
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const addToFavorites = (city) => {
    if (!favorites.some((favorites) => favorites.id === city.id)) {
      setFavorites((prev) => [...prev, city]);
      toast.success(`${city.name} added to Favorites!`);
    } else {
      toast.info(`${city.name} is already in Favorites.`);
    }
  };

  const removeFromFavorites = (cityId) => {
    if (!cityId) {
      toast.error("Invalid city ID");
      return;
    }

    setFavorites((prev) => prev.filter((city) => city.id !== cityId));
    toast.info(`City removed from Favorites.`);
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        forecastData,
        fetchWeather,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
