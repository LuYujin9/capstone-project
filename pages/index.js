import { Inter } from "next/font/google";
import Heading from "../components/Heading";
import SearchRestaurantsForm from "../components/SearchRestaurantsForm";
import { StyledMain, AlertMessage } from "../components/styles";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ username, onLogin, onSearchRestaurants }) {
  return (
    <>
      <Heading isHideBackButton={true} username={username} onLogin={onLogin}>
        Lecker Map
      </Heading>
      <StyledMain>
        <AlertMessage>
          Geben Sie bitte die "input" und suchen. Wenn Sie alle Restaurants
          anschauten, bitte "drücken" Sie den Button direkt.
        </AlertMessage>
        <SearchRestaurantsForm onSearchRestaurants={onSearchRestaurants} />
      </StyledMain>
    </>
  );
}
