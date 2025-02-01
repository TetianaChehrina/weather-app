import { useNavigate } from "react-router-dom";
import css from "./FavoritesList.module.css";

const FavoritesList = ({ favorites, removeFromFavorites }) => {
  const navigate = useNavigate();

  return (
    <div className={css.favoritesList}>
      {favorites.map((city) => (
        <div
          key={city.id}
          className={css.cityCard}
          onClick={() => navigate(`/favorites/${city.name}`)}
        >
          <div className={css.header}>
            <h3 className={css.cityName}>{city.name}</h3>
            <p className={css.temperature}>{Math.round(city.main.temp)}°C</p>
          </div>
          <p className={css.localTime}>
            {new Date(Date.now() + city.timezone * 1000).toLocaleTimeString(
              "en-US",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </p>
          <p className={css.weatherDescription}>
            {city.weather[0].description}
          </p>
          <div className={css.tempDetails}>
            <p>Max.: {Math.round(city.main.temp_max)}°C</p>
            <p>Min.: {Math.round(city.main.temp_min)}°C</p>
          </div>

          <button
            className={css.removeButton}
            onClick={(e) => {
              e.stopPropagation();
              removeFromFavorites(city.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
