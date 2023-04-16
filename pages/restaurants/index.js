import RestaurantsList from "../../components/RestaurantsList";
import Heading from "../../components/Heading";
import { StyledMain } from "../../components/styles";
import useSWR from "swr";
import { AlertMessage } from "../../components/styles";

export default function Restaurants({
  onToggleFavorite,
  username,
  onLogin,
  dataForRestaurantsSearch,
}) {
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });
  const { data: restaurants } = useSWR("/api/restaurants", {
    fallbackData: [],
  });
  const { restaurantName, cuisine, city } = dataForRestaurantsSearch;

  const matchedRestaurants = restaurants
    .filter(
      (restaurant) =>
        restaurant.name.toUpperCase() === restaurantName.toUpperCase() ||
        restaurantName === ""
    )
    .filter((restaurant) => restaurant.cuisine === cuisine || cuisine === "")
    .filter(
      (restaurant) =>
        restaurant.city.toUpperCase() === city.toUpperCase() || city === ""
    );
  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        Restaurants
      </Heading>
      <StyledMain>
        {matchedRestaurants.length === 0 ? (
          <AlertMessage>
            Opps! Kein entsprechendes Restaurant. Bitte gehen Sie zurück und
            probieren noch ein mal.
          </AlertMessage>
        ) : null}
        <RestaurantsList
          restaurants={matchedRestaurants}
          onToggleFavorite={onToggleFavorite}
          userInfos={userInfos}
          username={username}
        />
      </StyledMain>
    </>
  );
}

{
}
