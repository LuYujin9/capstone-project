import List from "../../components/List/List";
import { restaurants } from "../../lib/data";
import Heading from "../../components/Heading/Heading";

export default function Restaurants({ onToggleFavorite, userInfos }) {
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
