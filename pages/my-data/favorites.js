import styled from "styled-components";
import { restaurants } from "../../lib/data";
import Heading from "../../components/Heading/Heading";
import List from "../../components/List/List";

export default function Favorites({ userInfos, onToggleBookmark }) {
  //console.log("userInfos", userInfos);
  const favorites = userInfos.filter((info) => info.isFavorite === true);

  console.log("favorites", favorites);
  const favoriteRestaurants = restaurants.filter((restaurant) =>
    favorites.find((favorite) => favorite.id === restaurant.id)
  );
  console.log("favoriteRestaurants", favoriteRestaurants);

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
