import Map from "../components/Map";
import Heading from "../components/Heading";
import { StyledMain } from "../components/styles";
import useSWR from "swr";

export default function MapPage({ username, onLogin }) {
  const { data: restaurants } = useSWR("/api/restaurants", {
    fallbackData: [],
  });
  const { data: reserves } = useSWR("/api/reserves", {
    fallbackData: [],
  });
  const dataForMapMarkers = restaurants.filter((restaurant) =>
    reserves.some(
      (reserve) =>
        reserve.restaurantId === restaurant._id && reserve.username === username
    )
  );

  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        Meine Route
      </Heading>
      <StyledMain>
        <p>Hey!😎 Ich habe so viele Restaurants besucht.</p>
        <Map dataForMapMarkers={dataForMapMarkers} />
      </StyledMain>
    </>
  );
}
