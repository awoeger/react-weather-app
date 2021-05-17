import React from 'react';

export default function UserLocation({ handleUserLocationClick }) {
  return (
    <div className="App">
      <button onClick={handleUserLocationClick}>
        Get weather for your Location
      </button>
    </div>
  );
}
