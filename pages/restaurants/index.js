import List from "../../components/List/List";
import { restaurants } from "../../lib/data";
import Heading from "../../components/Heading/Heading";

export default function Restaurants() {
  return (
    <>
      <Heading>Restaurants</Heading>
      <List restaurants={restaurants} />
    </>
  );
}
