import List from "../../components/List/List";
//import { restaurants } from "../../lib/data";
import Heading from "../../components/Heading/Heading";
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
      <List
        restaurants={restaurants}
        onToggleFavorite={onToggleFavorite}
        userInfos={userInfos}
      />
    </>
  );
}
