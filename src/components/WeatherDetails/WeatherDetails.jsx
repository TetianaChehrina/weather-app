import css from "./WeatherDetails.module.css";

const WeatherDetails = ({ weatherData }) => {
  const getLocalTime = (timezone) => {
    const localTime = new Date(new Date().getTime() + timezone * 1000);
    const date = localTime.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    const time = localTime
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .toUpperCase();

    return { date, time };
  };

  const { date, time } = getLocalTime(weatherData.timezone);

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.city}>
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <p className={css.date}>{date}</p>
      </div>
      <div className={css.mainInfo}>
        <div className={css.temperature}>
          {Math.round(weatherData.main.temp)}°C
        </div>
        <div className={css.time}>{time}</div>
      </div>
      <div className={css.details}>
        <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
        <p>Wind: {weatherData.wind.speed} m/s</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>
          Sunrise:
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
        <p>
          Sunset:
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
};

export default WeatherDetails;
