import { restaurants } from "../../lib/data";
import Heading from "../../components/Heading/Heading";
import List from "../../components/List/List";

export default function Favorites({ userInfos, onToggleBookmark }) {
  const favorites = userInfos.filter((info) => info.isFavorite === true);
  const favoriteRestaurants = restaurants.filter((restaurant) =>
    favorites.find((favorite) => favorite.id === restaurant.id)
  );

  return (
    <>
      <Heading>Favoriten</Heading>
      <List
        restaurants={favoriteRestaurants}
        userInfos={userInfos}
        onToggleBookmark={onToggleBookmark}
      />
    </>
  );
}
