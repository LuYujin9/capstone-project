import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading";
import MenuListItem from "../../../components/MenuListItem";
import ToReservePageLink from "../../../components/ToReservePageLink";
import BookmarkButton from "../../../components/BookmarkButton";
import { StyledMain } from "../../../components/styles";
import useSWR from "swr";

export default function Menu({ onToggleFavorite, username, onLogin }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });
  const {
    data: restaurant,
    isLoading,
    error,
  } = useSWR(id ? `/api/restaurants/${id}` : null);
  if (!userInfos || !restaurant || isLoading || error) return <h2>Loading</h2>;

  const matchedUserInfo = userInfos.find(
    (info) => info.restaurantId === id && info.username === username
  );
  const foods = restaurant.foods;
  const isFavorite = matchedUserInfo ? matchedUserInfo.isFavorite : false;

  function handleToggleBookmark() {
    const newIsFavorite = !isFavorite;
    onToggleFavorite(matchedUserInfo, newIsFavorite, restaurant, username);
  }
  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        {restaurant.name}
      </Heading>
      <StyledMain>
        <BackgroundPhoto />
        <StyledSection>
          <BookmarkButton
            onToggleBookmark={handleToggleBookmark}
            isFavorite={isFavorite}
          />
          <StyledList role="list">
            {foods.length === 0 ? (
              <StyledParagraph>
                Tut mir leid! Es gibt noch keine Speisekarte.
              </StyledParagraph>
            ) : (
              foods.map((food) => <MenuListItem key={food.id} food={food} />)
            )}
          </StyledList>
        </StyledSection>
        <ToReservePageLink id={id} />
      </StyledMain>
    </>
  );
}

const BackgroundPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;

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

const StyledSection = styled.section`
  position: relative;
  margin: auto;
`;

const StyledList = styled.ul`
  width: 100%;
  margin-bottom: 4.5rem;
`;

const StyledParagraph = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 4rem 1.6rem;
`;
