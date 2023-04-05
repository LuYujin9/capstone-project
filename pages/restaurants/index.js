import List from "../../components/List/List";
import { restaurants } from "../../lib/data";
import Heading from "../../components/Heading/Heading";

export default function Restaurants({ onToggleBookmark, userInfos }) {
  return (
    <>
      <Heading>Restaurants</Heading>
      <List
        restaurants={restaurants}
        onToggleBookmark={onToggleBookmark}
        userInfos={userInfos}
      />
    </>
  );
}
