import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { WeatherContext } from "../../components/context/WeatherContext.jsx";
import FavoritesList from "../../components/FavoritesList/FavoritesList.jsx";
import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useContext(WeatherContext);
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <header className={css.header}>
        <button className={css.backButton} onClick={() => navigate("/home")}>
          <FaArrowLeft className={css.icon} /> Back
        </button>
      </header>
      <main className={css.main}>
        <FavoritesList
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
        />
      </main>
    </div>
  );
};

export default FavoritesPage;
