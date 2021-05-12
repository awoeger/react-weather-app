import React from 'react';

export default function Weather({
  totalReactPackages,
  temperature,
  feelsLike,
  tempMin,
  tempMax,
  humidity,
}) {
  return (
    <>
      <h1>Weather App</h1>
      <div>Total React packages from hooks: {totalReactPackages}</div>
      <p>Current Temperature: {temperature}</p>
      <p>Feels Like: {feelsLike}</p>
      <p>Temperature minimum: {tempMin}</p>
      <p>Temperature maximum: {tempMax}</p>
      <p>Humidity: {humidity}</p>
    </>
  );
}
