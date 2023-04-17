import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

export default function Map({ dataForMarkers }) {
  return (
    <>
      <StyledMapContainer center={[50.0, 11.0]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        {dataForMarkers.map((dataForMarker) => (
          <Marker position={dataForMarker.position} key={dataForMarker._id}>
            <Popup>{dataForMarker.name}</Popup>
          </Marker>
        ))}
      </StyledMapContainer>
    </>
  );
}
//
const StyledMapContainer = styled(MapContainer)`
  margin: 0;
  width: 100%;
  height: calc(100vh - 7rem);
  z-index: 0;
`;
