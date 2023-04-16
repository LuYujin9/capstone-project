import RestaurantsList from "../../components/RestaurantsList";
import Heading from "../../components/Heading";
import { StyledMain } from "../../components/styles";
import { AlertMessage } from "../../components/styles";
import { ChevronsDownIcon } from "../../public/icons";
import useSWR from "swr";
import { useState } from "react";
import { useEffect } from "react";

export default function Restaurants({
  onToggleFavorite,
  username,
  onLogin,
  dataForRestaurantsSearch,
}) {
  const [currentFilterCondition, setCurrentFilterCondition] =
    useState("Ohne Auswahl");
  const [isShowFilterConditions, setIsShowFilterConditions] = useState(false);
  const [matchedRestaurants, setMatchedRestaurants] = useState([]);
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });
  const { data: restaurants } = useSWR("/api/restaurants", {
    fallbackData: [],
  });
  const filterConditions = [
    { german: "Bewertung (höchste zuerst)", english: "rating" },
    { german: "Küche", english: "cuisine" },
    { german: "Preisniveau(teuerste zuerst)", english: "priceLevel" },
  ];

  useEffect(() => {
    const { restaurantName, cuisine, city } = dataForRestaurantsSearch;
    const matchedSearchConditionsRestaurants = restaurants
      .filter(
        (restaurant) =>
          restaurant.name.toUpperCase() === restaurantName.toUpperCase() ||
          restaurantName === ""
      )
      .filter((restaurant) => restaurant.cuisine === cuisine || cuisine === "")
      .filter(
        (restaurant) =>
          restaurant.city.toUpperCase() === city.toUpperCase() || city === ""
      );
    setMatchedRestaurants(matchedSearchConditionsRestaurants);
  }, [dataForRestaurantsSearch, restaurants]);

  function handleOpenFilterList() {
    setIsShowFilterConditions(!isShowFilterConditions);
  }

  function handleFilterCondition(condition) {
    function compareFn(a, b) {
      if (a[condition] > b[condition]) return -1;
      if (a[condition] < b[condition]) return 1;
      return 0;
    }
    setCurrentFilterCondition(condition);
    const filteredRestaurants = matchedRestaurants.slice().sort(compareFn);
    console.log(filteredRestaurants);
    setMatchedRestaurants(filteredRestaurants);
    console.log(matchedRestaurants);
  }

  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        Restaurants
      </Heading>
      <StyledMain>
        <button onClick={handleOpenFilterList}>
          Sortieren nach: {currentFilterCondition}
          <ChevronsDownIcon alt="PfilesUnter" />
        </button>
        {isShowFilterConditions && (
          <ul>
            {filterConditions.map((condition) => (
              <button
                key={condition.english}
                onClick={() => handleFilterCondition(condition.english)}
              >
                {condition.german}
              </button>
            ))}
          </ul>
        )}
        {matchedRestaurants.length === 0 ? (
          <AlertMessage>
            Opps! Kein entsprechendes Restaurant gefunden. Bitte gehen Sie
            zurück und probieren es noch ein mal.
          </AlertMessage>
        ) : null}
        <RestaurantsList
          restaurants={matchedRestaurants}
          onToggleFavorite={onToggleFavorite}
          userInfos={userInfos}
          username={username}
        />
      </StyledMain>
    </>
  );
}

{
}
