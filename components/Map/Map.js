import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

export default function Map({ dataForMapMarkers }) {
  return (
    <StyledMapContainer center={[51.0, 11.0]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      {dataForMapMarkers.map((dataForMapMarker) => (
        <Marker position={dataForMapMarker.position} key={dataForMapMarker._id}>
          <Popup>{dataForMapMarker.name}</Popup>
        </Marker>
      ))}
    </StyledMapContainer>
  );
}
//
const StyledMapContainer = styled(MapContainer)`
  margin: 0;
  border: 0.5rem double var(--button-color);

  width: 90%;
  height: calc(100vh - 10rem);
  z-index: 0;
`;
