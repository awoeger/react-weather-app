import React, { useState } from 'react';

export default function Input({ city, setCity, country, setCountry }) {
  // Setting state for the Input.js values

  function handleCountryChange(event) {
    setCountry(event.currentTarget.value);
  }

  function handleCityChange(event) {
    setCity(event.currentTarget.value);
  }

  return (
    <form>
      <label htmlFor="country">Name your Country</label>
      <input
        type="text"
        id="country"
        placeholder="Austria"
        value={country}
        onChange={handleCountryChange}
      />

      <label htmlFor="city">Name your city</label>
      <input
        type="text"
        id="city"
        placeholder="Vienna"
        value={city}
        onChange={handleCityChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
