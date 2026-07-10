# 🌤️ SkyCast — React Weather App

A beginner-friendly, fully functional weather app built with React. Search
any city and get real-time temperature, humidity, wind speed, and conditions
from the OpenWeather API.

**Concepts covered:** Components · Props · useState · useEffect · API fetching
· conditional rendering · loading/error states · responsive CSS.

---

## 📁 Folder Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── weatherApi.js       # fetch logic, isolated from UI
│   ├── components/
│   │   ├── SearchBar.jsx       # input + submit button
│   │   ├── WeatherCard.jsx     # displays weather data
│   │   ├── Loader.jsx          # spinner shown while fetching
│   │   └── ErrorMessage.jsx    # reusable error banner
│   ├── App.jsx                 # state + useEffect + layout
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

Keeping `api/` separate from `components/` is a habit worth building early —
it means your UI code never needs to know *how* data is fetched, only that
it exists.

---

## 🔑 Step 1: Get your free OpenWeather API key

1. Go to **openweathermap.org/api** and create a free account.
2. Navigate to **API keys** in your account dashboard.
3. Copy the default key (new keys take up to 2 hours to activate, so do this first).

## 🛠️ Step 2: Set up the project

```bash
# create the app
npx create-react-app weather-app
cd weather-app
```

Then replace the generated `src/` folder and `package.json` with the files
from this project (or just copy each file above into your own CRA project).

## 🔐 Step 3: Add your API key

Rename `.env.example` to `.env` in the project root and paste your key:

```
REACT_APP_WEATHER_API_KEY=your_real_key_here
```

⚠️ Never commit `.env` to GitHub — it's already listed in `.gitignore`.
Restart the dev server after creating `.env` (CRA only reads it on startup).

## ▶️ Step 4: Run it

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

---

## 🧠 How the logic flows (for your own understanding)

1. `App.jsx` holds the single source of truth: `city`, `weather`, `loading`,
   `error` — all via `useState`.
2. `useEffect` watches `city`. Every time it changes, it re-runs the fetch —
   this is the dependency array, `[city]`, doing its job.
3. `SearchBar` doesn't fetch anything itself. It receives an `onSearch`
   function as a **prop** and just calls it — a clean example of "lifting
   state up."
4. `WeatherCard`, `Loader`, and `ErrorMessage` are all dumb, presentational
   components — they just render whatever prop they're given.
5. Conditional rendering (`{loading && ...}`) shows exactly one state at a
   time: loading, error, or data. No flickering, no overlap.

---

## 📄 Step 5: Add this to your resume

Suggested resume bullet points:

- Built a responsive weather application in React using functional
  components and hooks (`useState`, `useEffect`), consuming a live
  third-party REST API (OpenWeatherMap).
- Implemented proper loading and error-handling states to improve UX during
  network requests.
- Structured the codebase with a clear separation between API logic and UI
  components for maintainability.

Push it to GitHub with a clean README (this one works) and deploy it free
on **Vercel** or **Netlify** — a live demo link on your resume matters more
than the code itself.

---

## 🚀 Ideas to extend it (great for showing initiative in interviews)

- Add a 5-day forecast using the `/forecast` endpoint.
- Add geolocation (`navigator.geolocation`) to auto-detect the user's city.
- Add a °C/°F toggle (more `useState`, more props practice).
- Persist the last-searched city with `localStorage`.
- Add unit tests with React Testing Library.
