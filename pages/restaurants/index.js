import List from "../../components/List/List";
import { restaurants } from "../../lib/data";

export default function Restaurants() {
  return (
    <>
      <main>
        <List restaurants={restaurants} />
      </main>
    </>
  );
}
