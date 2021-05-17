import React from 'react';

export default function UserLocation({
  lat,
  lng,
  status,
  handleUserLocationClick,
}) {
  return (
    <div className="App">
      <button onClick={handleUserLocationClick}>
        Get weather for your Location
      </button>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    </div>
  );
}
