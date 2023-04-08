import List from "../../components/List/List";
//import { restaurants } from "../../lib/data";
import Heading from "../../components/Heading/Heading";
import useSWR from "swr";

export default function Restaurants({ onToggleFavorite, userInfos }) {
  const { data } = useSWR("/api/restaurants", { fallbackData: [] });
  return (
    <>
      <Heading>Restaurants</Heading>
      <List
        restaurants={data}
        onToggleFavorite={onToggleFavorite}
        userInfos={userInfos}
      />
    </>
  );
}
