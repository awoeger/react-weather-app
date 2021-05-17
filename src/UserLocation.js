import React from 'react';

export default function UserLocation({ handleUserLocationClick }) {
  return (
    <div>
      <button className="location-btn" onClick={handleUserLocationClick}>
        Your location
      </button>
    </div>
  );
}
