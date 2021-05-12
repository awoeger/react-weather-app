import React from 'react';

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
      <p>Current Temperature: {temperature} °C</p>
      <p>Feels Like: {feelsLike} °C</p>
      <p>Temperature minimum: {tempMin} °C</p>
      <p>Temperature maximum: {tempMax} °C</p>
      <p>Humidity: {humidity} %</p>
    </>
  );
}
