import { Inter } from "next/font/google";
import Heading from "../components/Heading";
import SearchRestaurantsForm from "../components/SearchRestaurantsForm";
import { StyledMain, AlertMessage } from "../components/styles";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  username,
  onLogin,
  onMatchRestaurants,
  isMatchingRestaurants,
}) {
  const { data: restaurants } = useSWR("/api/restaurants", {
    fallbackData: [],
  });
  return (
    <>
      <Heading isHideBackButton={true} username={username} onLogin={onLogin}>
        Lecker Map
      </Heading>
      <StyledMain>
        <AlertMessage>
          Bitten geben Sie hier Ihre Wünsche zur Suche ein. Wenn Sie alle
          Restaurants ohne eine Vorauswahl anschauen möchten, drücken Sie bitte
          direkt den Button “Suchen“.
        </AlertMessage>
        <SearchRestaurantsForm
          onMatchRestaurants={onMatchRestaurants}
          restaurants={restaurants}
        />
        {!isMatchingRestaurants && (
          <AlertMessage>
            Opps! Kein entsprechendes Restaurant gefunden. Bitte gehen Sie
            zurück und probieren es noch ein mal.
          </AlertMessage>
        )}
      </StyledMain>
    </>
  );
}
