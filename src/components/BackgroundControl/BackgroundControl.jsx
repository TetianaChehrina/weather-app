import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { WeatherContext } from "../context/WeatherContext";
import defaultImage from "../../assets/weather.jpg";

const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

const BackgroundControl = () => {
  const { weatherData } = useContext(WeatherContext);
  const [backgroundImage, setBackgroundImage] = useState(defaultImage);

  useEffect(() => {
    const fetchBackgroundImage = async (query) => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query,
              client_id: UNSPLASH_API_KEY,
              orientation: "landscape",
            },
          }
        );

        if (response.data.results && response.data.results.length > 0) {
          setBackgroundImage(response.data.results[0].urls.full);
        } else {
          console.log(`No results found for query: ${query}`);
          setBackgroundImage(defaultImage);
        }
      } catch (error) {
        console.error("Error fetching background image:", error);
        setBackgroundImage(defaultImage);
      }
    };

    const lastCity = Object.keys(weatherData).pop();
    const cityName = weatherData[lastCity]?.name;

    if (cityName) {
      fetchBackgroundImage(cityName);
    } else {
      setBackgroundImage(defaultImage);
    }
  }, [weatherData]);

  useEffect(() => {
    if (backgroundImage) {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    }
  }, [backgroundImage]);

  return null;
};

export default BackgroundControl;
