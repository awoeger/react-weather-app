import './App.css';
import react, { useState } from 'react';
import Input from './Input';
import Weather from './Weather';

function App() {
  const [feelsLike, setFeelsLike] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [tempMin, setTempMin] = useState(null);
  const [weatherState, setWeatherState] = useState(null);
  const [unit, setUnit] = useState('Celcius');

  // Setting the useState for the Input fields
  const [city, setCity] = useState('Vienna');

  // Event Handler for Submit Button in Input.js
  function handleSubmitClick() {
    // Fetching Weather data
    // GET request using fetch
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    )
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.main.temp);
        setFeelsLike(data.main.feels_like);
        setHumidity(data.main.humidity);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        setWeatherState(data.weather[0].main);
        return;
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }

  // Setting the change for temperature Unit conditions
  function handleUnitChange() {
    if (unit === 'Celcius') {
      setTemperature(temperature + 273);
      setTempMin(tempMin + 273.15);
      setTempMax(tempMax + 273.15);
      setFeelsLike(feelsLike + 273.15);
      setUnit('Kelvin');
    } else {
      setTemperature(temperature - 273.15);
      setTempMin(tempMin - 273.15);
      setTempMax(tempMax - 273.15);
      setFeelsLike(feelsLike - 273.15);
      setUnit('Celcius');
    }
  }

  return (
    <>
      <Input
        handleSubmitClick={handleSubmitClick}
        city={city}
        setCity={setCity}
        unit={unit}
        setUnit={setUnit}
        handleUnitChange={handleUnitChange}
      />
      <Weather
        temperature={temperature}
        feelsLike={feelsLike}
        tempMin={tempMin}
        tempMax={tempMax}
        humidity={humidity}
        weatherState={weatherState}
      />
    </>
  );
}

export default App;
