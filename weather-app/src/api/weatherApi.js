// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_KEY = "b83ae772ad1f95c3c8fd8f7cb96ff2b6";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Fetches current weather for a given city name.
 * Throws an Error with a readable message if the request fails,
 * so the calling component can catch it and show it to the user.
 */
export async function fetchWeatherByCity(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(
        `City "${city}" not found. Check the spelling and try again.`,
      );
    }
    if (response.status === 401) {
      throw new Error("Invalid API key. Double-check your .env file.");
    }
    throw new Error(
      "Something went wrong while fetching the weather. Try again.",
    );
  }

  const data = await response.json();

  // Shape the data into exactly what our UI needs — keeps components dumb and simple.
  return {
    city: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    condition: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
}
