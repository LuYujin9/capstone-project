import { restaurants } from "../../lib/data";
import Heading from "../../components/Heading/Heading";
import List from "../../components/List/List";
import useSWR from "swr";

export default function Favorites({ onToggleFavorite }) {
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
      <Heading>Favoriten</Heading>
      <List
        restaurants={favoriteRestaurants}
        userInfos={userInfos}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
