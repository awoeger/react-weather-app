export default function Weather({
  temperature,
  feelsLike,
  tempMin,
  tempMax,
  humidity,
  weatherState,
}) {
  return (
    <>
      <h1>Weather App</h1>
      <p>Current state: {weatherState}</p>
      <p>Current Temperature: {temperature} °C / °F </p>
      <p>Feels Like: {feelsLike} °C / °F</p>
      <p>Temperature minimum: {tempMin} °C / °F</p>
      <p>Temperature maximum: {tempMax} °C / °F</p>
      <p>Humidity: {humidity} %</p>
    </>
  );
}
