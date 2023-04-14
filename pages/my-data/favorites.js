import Heading from "../../components/Heading";
import RestaurantsList from "../../components/RestaurantsList";
import { StyledMain } from "../../components/styles";
import useSWR from "swr";

export default function Favorites({ onToggleFavorite, username, onLogin }) {
  const { data: restaurants } = useSWR("/api/restaurants", {
    fallbackData: [],
  });
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });
  if (!restaurants || !userInfos) <h2>Loading</h2>;

  const favorites = userInfos.filter((info) => info.isFavorite === true);
  const favoriteRestaurants = restaurants.filter((restaurant) =>
    favorites.find((favorite) => favorite.restaurantId === restaurant._id)
  );

  return (
    <>
      <Heading isLoginWindowOpen={false} username={username} onLogin={onLogin}>
        Favoriten
      </Heading>
      <StyledMain>
        <RestaurantsList
          restaurants={favoriteRestaurants}
          userInfos={userInfos}
          onToggleFavorite={onToggleFavorite}
        />
      </StyledMain>
    </>
  );
}
