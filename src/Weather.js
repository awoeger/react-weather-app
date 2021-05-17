/* eslint-disable react/self-closing-comp */
export default function Weather({
  temperature,
  feelsLike,
  tempMin,
  tempMax,
  humidity,
  weatherState,
  handleUnitChange,
}) {
  return (
    <div className="weather-container">
      <div className={weatherState}></div>
      <p className="state">
        Current state: <span>{weatherState}</span>
      </p>
      <p>
        Current Temperature: <span>{temperature} °C/°F </span>
      </p>
      <p>
        Feels Like: <span>{feelsLike} °C/°F</span>
      </p>
      <p>
        Temperature min: <span>{tempMin} °C/°F</span>
      </p>
      <p>
        Temperature max: <span>{tempMax} °C/°F</span>
      </p>
      <p>
        Humidity: <span>{humidity} %</span>
      </p>
      <button className="unit-btn" onClick={handleUnitChange} type="button">
        Change unit
      </button>
    </div>
  );
}
