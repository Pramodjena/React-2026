// Pure presentational component — all it does is take "weather" as a prop
// and render it. No state, no fetching. This separation is what makes
// components reusable and easy to test.
function WeatherCard({ weather }) {
  const { city, country, temp, feelsLike, humidity, wind, condition, description, icon } =
    weather;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className={`weather-card condition-${condition.toLowerCase()}`}>
      <div className="weather-card-header">
        <h2>
          {city}, {country}
        </h2>
        <img src={iconUrl} alt={description} className="weather-icon" />
      </div>

      <p className="temp">{temp}°C</p>
      <p className="description">{description}</p>
      <p className="feels-like">Feels like {feelsLike}°C</p>

      <div className="weather-details">
        <div className="detail">
          <span className="label">Humidity</span>
          <span className="value">{humidity}%</span>
        </div>
        <div className="detail">
          <span className="label">Wind</span>
          <span className="value">{wind} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
