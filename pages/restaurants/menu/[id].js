import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading";
import MenuListItem from "../../../components/MenuListItem";
import ToReservePageLink from "../../../components/ToReservePageLink";
import BookmarkButton from "../../../components/BookmarkButton";
import { AlertMessage, MainWithBackground } from "../../../components/styles";
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

  const matchingUserInfo = userInfos.find(
    (info) => info.restaurantId === id && info.username === username
  );
  const foods = restaurant.foods;
  const isFavorite = matchingUserInfo ? matchingUserInfo.isFavorite : false;

  function handleToggleBookmark() {
    const newIsFavorite = !isFavorite;
    onToggleFavorite(matchingUserInfo, newIsFavorite, restaurant, username);
  }
  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        {restaurant.name}
      </Heading>
      <MainWithBackground>
        <BackgroundPhoto />
        <StyledSection>
          <BookmarkButton
            onToggleBookmark={handleToggleBookmark}
            isFavorite={isFavorite}
          />
          <StyledList role="list">
            {foods.length === 0 ? (
              <AlertMessage>
                Tut mir leid! Es gibt noch keine Speisekarte.
              </AlertMessage>
            ) : (
              foods.map((food) => <MenuListItem key={food.id} food={food} />)
            )}
          </StyledList>
        </StyledSection>
        <ToReservePageLink id={id} />
      </MainWithBackground>
    </>
  );
}

export const StyledMain = styled.main`
  width: 100vw;
  margin: 3rem auto;
  padding: 0;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackgroundPhoto = styled.div`
  width: 100vw;
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

  opacity: 0.7;
  margin: auto;
  min-height: 100vh;
  z-index: -1;
`;

const StyledSection = styled.section`
  width: 94%;
  min-height: 100vh;
  position: relative;
`;

const StyledList = styled.ul`
  margin-bottom: 4.5rem;
`;
