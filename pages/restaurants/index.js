import RestaurantsList from "../../components/RestaurantsList";
import Heading from "../../components/Heading";
import { StyledMain } from "../../components/styles";
import { ChevronsDownIcon } from "../../public/icons";
import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";

export default function Restaurants({
  onToggleFavorite,
  username,
  onLogin,
  restaurantsMatchingTheSearch,
}) {
  const [currentFilterCondition, setCurrentFilterCondition] =
    useState("Ohne Auswahl");
  const [isShowFilterConditions, setIsShowFilterConditions] = useState(false);
  const [matchingRestaurants, setMatchingRestaurants] = useState(
    restaurantsMatchingTheSearch
  );
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });

  const filterConditions = [
    { german: "Bewertung (höchste zuerst)", english: "rating" },
    { german: "Küche", english: "cuisine" },
    { german: "Preisniveau(teuerste zuerst)", english: "priceLevel" },
  ];

  function handleOpenFilterList() {
    setIsShowFilterConditions(!isShowFilterConditions);
  }

  function handleFilterCondition(condition) {
    setCurrentFilterCondition(condition.german);
    const filteredRestaurants = matchingRestaurants.slice().sort((a, b) => {
      if (a[condition.english] > b[condition.english]) return -1;
      if (a[condition.english] < b[condition.english]) return 1;
      return 0;
    });
    setMatchingRestaurants(filteredRestaurants);
    setIsShowFilterConditions(!isShowFilterConditions);
  }

  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        Restaurants
      </Heading>
      <StyledMain>
        <FilterButton
          aria-label="Öffen die Filterauswahl"
          onClick={handleOpenFilterList}
        >
          <b>Sortieren nach:</b> {currentFilterCondition}
          <ChevronsDownIcon alt="PfilesUnter" />
        </FilterButton>
        {isShowFilterConditions && (
          <FilterList role="list">
            {filterConditions.map((condition) => (
              <FilterListItem key={condition.english}>
                <FilterOption
                  aria-label="die Wahl von Filter"
                  onClick={() => handleFilterCondition(condition)}
                >
                  {condition.german}
                </FilterOption>
              </FilterListItem>
            ))}
          </FilterList>
        )}
        <RestaurantsList
          restaurants={matchingRestaurants}
          onToggleFavorite={onToggleFavorite}
          userInfos={userInfos}
          username={username}
        />
      </StyledMain>
    </>
  );
}

const FilterButton = styled.button`
  width: 90%;
  max-width: 30rem;
  margin-top: 1rem;
  border-radius: 10px;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  color: white;
  background-color: var(--button-color);
`;

const FilterList = styled.ul`
  width: 100%;
  margin: 0;

  display: flex;
  flex-direction: column;
`;
const FilterListItem = styled.li`
  width: 90%;
  max-width: 30rem;
  margin: 0 auto;
  list-style-type: none;

  background-color: var(--antique-color);
`;
const FilterOption = styled.button`
  width: 100%;
  height: 2rem;
  border: none;
  margin: 0 auto;
  font-size: 0.9rem;

  background-color: var(--button-color);
  color: var(--white-color);

  &:hover {
    background-color: var(--white-color);
    color: var(--bold-color);
  }
`;
