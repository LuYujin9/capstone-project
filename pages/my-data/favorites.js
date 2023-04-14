import Heading from "../../components/Heading";
import RestaurantsList from "../../components/RestaurantsList";
import LoginModal from "../../components/LoginModal";
import useSWR from "swr";
import { useState } from "react";

export default function Favorites({ onToggleFavorite, username }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

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
      <LoginModal
        isOpen={isLoginModalOpen}
        username={username}
        isHomepage={false}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <RestaurantsList
        restaurants={favoriteRestaurants}
        userInfos={userInfos}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
