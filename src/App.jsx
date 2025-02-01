import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { WeatherProvider } from "./components/context/WeatherContext.jsx";
import BackgroundControl from "./components/BackgroundControl/BackgroundControl.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const FavoritesPage = lazy(() =>
  import("./pages/FavoritesPage/FavoritesPage.jsx")
);
const CityWeatherPage = lazy(() =>
  import("./pages/CityWeatherPage/CityWeatherPage")
);

const App = () => {
  return (
    <WeatherProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <BackgroundControl />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route
            path="/home"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/favorites"
            element={
              <Layout>
                <FavoritesPage />
              </Layout>
            }
          />
          <Route
            path="/favorites/:city"
            element={
              <Layout>
                <CityWeatherPage />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </WeatherProvider>
  );
};

export default App;
