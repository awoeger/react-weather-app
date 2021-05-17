import React from 'react';

export default function UserLocation({ lat, lng, status, getLocation }) {
  return (
    <div className="App">
      <button onClick={getLocation}>Get weather for your Location</button>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    </div>
  );
}
