import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png',
  iconSize: [32, 32],
});

function MapView({ lat, lon, city }) {
  if (!lat || !lon) return null;

  return (
    <div className="mt-6 w-full h-[400px] rounded shadow-lg overflow-hidden">
      <MapContainer center={[lat, lon]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[lat, lon]} icon={customIcon}>
          <Popup>¡Aquí está {city}!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;
