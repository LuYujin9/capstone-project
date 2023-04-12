import List from "../../components/List/List";
import Heading from "../../components/Heading/Heading";
import useSWR from "swr";

export default function Restaurants({ onToggleFavorite }) {
  const { data: restaurants } = useSWR("/api/restaurants", {
    fallbackData: [],
  });
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });
  console.log(restaurants);

  return (
    <>
      <Heading>Restaurants</Heading>
      <List
        restaurants={restaurants}
        onToggleFavorite={onToggleFavorite}
        userInfos={userInfos}
      />
    </>
  );
}
