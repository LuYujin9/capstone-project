import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading";
import MenuListItem from "../../../components/MenuListItem";
import ToReservePageLink from "../../../components/ToReservePageLink";
import BookmarkButton from "../../../components/BookmarkButton";
import { StyledContainer } from "../../../components/styles/styles";
import useSWR from "swr";

export default function Menu({ onToggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;
  const {
    data: restaurant,
    isLoading,
    error,
  } = useSWR(`/api/restaurants/${id}`);
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });
  const matchedUserInfo = userInfos.find((info) => info.restaurantId === id);
  if (!isReady || !userInfos || !restaurant || isLoading || error)
    return <h2>Loading</h2>;

  const foods = restaurant.foods;
  const isFavorite = matchedUserInfo ? matchedUserInfo.isFavorite : false;

  function handleToggleBookmark() {
    const newIsFavorite = !isFavorite;
    onToggleFavorite(matchedUserInfo, newIsFavorite, restaurant);
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
