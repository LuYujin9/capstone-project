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
  const dataForMarkers = restaurants.filter((restaurant) =>
    reserves.some((reserve) => reserve.restaurantId === restaurant._id)
  );

  /* console.log(restaurants);
  console.log(reserves); */

  return (
    <>
      <Heading isHideBackButton={true} username={username} onLogin={onLogin}>
        Map
      </Heading>
      <StyledMain>
        <Map dataForMarkers={dataForMarkers} />
      </StyledMain>
    </>
  );
}
