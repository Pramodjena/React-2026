import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { fetchWeatherByCity } from "./api/weatherApi";
import "./App.css";

function App() {
  // ---- State ----
  const [city, setCity] = useState("Delhi"); // default city on first load
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ---- Effect: runs whenever `city` changes (including first render) ----
  useEffect(() => {
    let isCancelled = false; // guards against setting state after unmount

    async function loadWeather() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchWeatherByCity(city);
        if (!isCancelled) setWeather(data);
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
          setWeather(null);
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    loadWeather();

    return () => {
      isCancelled = true; // cleanup on unmount / before next effect run
    };
  }, [city]); // <-- dependency array: re-fetch only when city changes

  function handleSearch(newCity) {
    setCity(newCity);
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌤️ SkyCast</h1>
        <p className="tagline">Real-time weather, straight from OpenWeather</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {/* Conditional rendering: exactly one of these three shows at a time */}
      {loading && <Loader />}
      {!loading && error && <ErrorMessage message={error} />}
      {!loading && !error && weather && <WeatherCard weather={weather} />}

      <footer className="app-footer">
        <p>Built with React • Data by OpenWeatherMap</p>
      </footer>
    </div>
  );
}

export default App;
