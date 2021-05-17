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

  const getLocation = () => {
    // Check if navigator.geolocation is supported by browser
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      // get user current position and set latitude and longitude coordinates
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
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <Input
        handleSubmitClick={handleSubmitClick}
        city={city}
        setCity={setCity}
        unit={unit}
        setUnit={setUnit}
        handleUnitChange={handleUnitChange}
      />
      <UserLocation
        lat={lat}
        lng={lng}
        status={status}
        getLocation={getLocation}
      />
      <Weather
        temperature={temperature}
        feelsLike={feelsLike}
        tempMin={tempMin}
        tempMax={tempMax}
        humidity={humidity}
        weatherState={weatherState}
        city={city}
      />
    </div>
  );
}

export default App;
