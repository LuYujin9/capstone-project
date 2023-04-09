import { restaurants } from "../../../lib/data.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";
import MenuListItem from "../../../components/MenuListItem/MenuListItem.js";
import ToReservePageLink from "../../../components/ToReservePageLink/ToReservePageLink";
import BookmarkButton from "../../../components/BookmarkButton/BookmarkButton.js";
import { StyledContainer } from "../../../components/styles/styles";
import useSWR from "swr";

export default function Menu({ onToggleFavorite, userInfos }) {
  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;
  const {
    data: restaurant,
    isLoading,
    error,
  } = useSWR(`/api/restaurants/${id}`);
  if (!isReady || isLoading || error) return <h2>Loading</h2>;

  const foods = restaurant.foods;

  const matchedInfo = userInfos?.find((info) => info.restaurantId === id);
  const isFavorite = matchedInfo ? matchedInfo.isFavorite : false;
  function handleToggleBookmark() {
    onToggleFavorite(id, restaurant);
  }
  return (
    <>
      <Heading>{restaurant.name}</Heading>
      <BackgroundPhoto />
      <StyledContainer>
        <StyledSection>
          <BookmarkButton
            onToggleBookmark={handleToggleBookmark}
            isFavorite={isFavorite}
          />
          <StyledList role="list">
            {foods.length === 0 ? (
              <p>Tut mir leid! Es gibt noch keine Speisekarte.</p>
            ) : (
              foods.map((food) => <MenuListItem key={food.id} food={food} />)
            )}
          </StyledList>
        </StyledSection>
      </StyledContainer>
      <ToReservePageLink id={id} />
    </>
  );
}

const BackgroundPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;

  background-color: lightgrey;
  background-image: url(/images/menu-background.jpeg);
  background-repeat: repeat;
  background-size: cover;
  background-position: center top;

  opacity: 0.75;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
`;

export const StyledSection = styled.section`
  position: relative;
  margin: auto;
`;

const StyledList = styled.ul`
  width: 100%;
  margin-bottom: 4.5rem;
`;
