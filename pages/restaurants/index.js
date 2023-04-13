import RestaurantsList from "../../components/RestaurantsList";
import Heading from "../../components/Heading";
import useSWR from "swr";

export default function Restaurants({ onToggleFavorite }) {
  const { data: restaurants } = useSWR("/api/restaurants", {
    fallbackData: [],
  });
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });

  return (
    <>
      <Heading>Restaurants</Heading>
      <RestaurantsList
        restaurants={restaurants}
        onToggleFavorite={onToggleFavorite}
        userInfos={userInfos}
      />
    </>
  );
}
