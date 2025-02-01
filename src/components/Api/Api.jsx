import axios from "axios";
const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          units: "metric",
          appid: apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          q: city,
          units: "metric",
          appid: apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching forecast data:", error);
    throw error;
  }
};
