import './App.css';
import react, { useEffect, useState } from 'react';
import Input from './Input';
import Weather from './Weather';

function App() {
  const [totalReactPackages, setTotalReactPackages] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [tempMin, setTempMin] = useState(null);

  // Setting the useState for the Input fields
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('Vienna');

  // Fetching Weather data
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.main.temp);
        setFeelsLike(data.main.feels_like);
        setHumidity(data.main.humidity);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        return setTotalReactPackages(data.total);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [city]);

  return (
    <>
      <Input
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
      />
      <Weather
        totalReactPackages={totalReactPackages}
        temperature={temperature}
        feelsLike={feelsLike}
        tempMin={tempMin}
        tempMax={tempMax}
        humidity={humidity}
      />
    </>
  );
}

export default App;
