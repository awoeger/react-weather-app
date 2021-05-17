/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import './App.css';
import { useState } from 'react';
import Input from './Input';
import UserLocation from './UserLocation';
import Weather from './Weather';

function App() {
  const [feelsLike, setFeelsLike] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [tempMin, setTempMin] = useState(null);
  const [weatherState, setWeatherState] = useState(null);
  const [unit, setUnit] = useState('Celcius');
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [city, setCity] = useState('Vienna');
  const [showDiv, setShowDiv] = useState(false);

  // EVENT HANDLER FOR SUBMIT BUTTON IN INPUT.js

  function handleSubmitClick() {
    // Fetching Weather data
    // GET request using fetch
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    )
      .then((response) => response.json())
      .then((data) => {
        setTemperature(parseInt(data.main.temp));
        setFeelsLike(parseInt(data.main.feels_like));
        setHumidity(data.main.humidity);
        setTempMin(parseInt(data.main.temp_min));
        setTempMax(parseInt(data.main.temp_max));
        setWeatherState(data.weather[0].main);
        setShowDiv(true);
        return;
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }

  // SETTING THE CHANGE FOR THE TEMPERATURE UNIT CONDITIONS

  function handleUnitChange() {
    if (unit === 'Celcius') {
      console.log(temperature);
      setTemperature(temperature + 273);
      console.log(temperature);
      console.log(temperature + 273);
      console.log(unit);
      setTempMin(tempMin + 273);
      setTempMax(tempMax + 273);
      setFeelsLike(feelsLike + 273);
      setUnit('Kelvin');
    } else {
      console.log(temperature);
      setTemperature(temperature - 273);
      console.log(temperature);
      console.log(temperature - 273);
      console.log(unit);
      setTempMin(tempMin - 273);
      setTempMax(tempMax - 273);
      setFeelsLike(feelsLike - 273);
      setUnit('Celcius');
    }
  }

  // GET CURRENT POSITION OF USER

  const handleUserLocationClick = () => {
    setShowDiv(true);
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      // error message
      () => {
        setStatus('Unable to retrieve your location');
      },
    );

    if (lat !== null && lng !== null) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
      )
        .then((response) => response.json())
        .then((data) => {
          setTemperature(parseInt(data.main.temp));
          setFeelsLike(parseInt(data.main.feels_like));
          setHumidity(data.main.humidity);
          setTempMin(parseInt(data.main.temp_min));
          setTempMax(parseInt(data.main.temp_max));
          setWeatherState(data.weather[0].main);
          return;
        });
    }
  };

  return (
    <div className="container">
      <h1>Current Weather</h1>
      <UserLocation handleUserLocationClick={handleUserLocationClick} />
      <Input
        handleSubmitClick={handleSubmitClick}
        city={city}
        setCity={setCity}
        unit={unit}
        setUnit={setUnit}
        handleUnitChange={handleUnitChange}
      />
      {showDiv ? (
        <Weather
          temperature={temperature}
          feelsLike={feelsLike}
          tempMin={tempMin}
          tempMax={tempMax}
          humidity={humidity}
          weatherState={weatherState}
        />
      ) : null}
    </div>
  );
}

export default App;
