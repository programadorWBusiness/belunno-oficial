import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const Map = () => {
  const position: [number, number] = [-28.31390222438269, -51.94778508340468]; // Definindo o tipo explicitamente

  const customIcon = L.icon({
    iconUrl: '/images/icon-map.png', // Substitua pela URL do seu ícone
    iconSize: [25, 41], // Tamanho do ícone
    iconAnchor: [12, 41], // Ponto do ícone que ficará na posição do marcador
    popupAnchor: [1, -34], // Ponto do popup que ficará em relação ao ícone
  });

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" , zIndex: "0"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Belunno
        </Popup>
      </Marker>
      <span className="leaflet-control-attribution">
        &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
      </span>
    </MapContainer>
  );
};

export default Map;
