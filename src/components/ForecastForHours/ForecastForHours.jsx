import css from "./ForecastForHours.module.css";

const ForecastForHours = ({ forecastData }) => (
  <div className={css.hourlyForecast}>
    <div className={css.hourlyList}>
      {forecastData.list.slice(0, 24).map((hour, index) => (
        <div key={index} className={css.hour}>
          <p>{new Date(hour.dt * 1000).getHours()}:00</p>
          <p>{Math.round(hour.main.temp)}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
            alt={hour.weather[0].description}
          />
        </div>
      ))}
    </div>
  </div>
);
export default ForecastForHours;
