import css from "./ForecastForDay.module.css";

const ForecastForDay = ({ forecastData }) => {
  const groupedByDay = forecastData.list.reduce((acc, item) => {
    const date = new Date(item.dt_txt).toLocaleDateString("en-US", {
      weekday: "long",
    });
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});

  return (
    <div className={css.dailyForecast}>
      <h3 className={css.title}>5-Day Forecast</h3>
      <div className={css.dailyList}>
        {Object.entries(groupedByDay)
          .slice(0, 5)
          .map(([date, items], index) => (
            <div key={index} className={css.day}>
              <p>{date}</p>
              <p>{Math.round(items[0].main.temp)}°C</p>
              <img
                src={`https://openweathermap.org/img/wn/${items[0].weather[0].icon}.png`}
                alt={items[0].weather[0].description}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ForecastForDay;
