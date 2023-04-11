import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export function Mapa() {
  const [center, setCenter] = useState([53.19726869117205, 5.798909707952108])

  function handleMapClick(e){
    setCenter([e.latlng.lat, e.latlng.lng])
  }
  return (
      {/* <MapContainer center={center} zoom={13}  scrollWheelZoom={true} onClick={handleMapClick} style={{ width: '300px', height: '300px', border: '1px solid green' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    
  );
};
