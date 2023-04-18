import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading";
import MenuListItem from "../../../components/MenuListItem";
import ToReservePageLink from "../../../components/ToReservePageLink";
import BookmarkButton from "../../../components/BookmarkButton";
import { AlertMessage } from "../../../components/styles";
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
      <StyledMain>
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
      </StyledMain>
    </>
  );
}

export const StyledMain = styled.main`
  margin: 3rem auto;
  padding: 0;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
    left: 0;
    right: 0;
  }
`;

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
  width: 94%;
  position: relative;
  margin: auto;
`;

const StyledList = styled.ul`
  margin-bottom: 4.5rem;
`;
