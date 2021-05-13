import './App.css';
import { useState } from 'react';
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

  // Setting the change for temperature Unit conditions
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
