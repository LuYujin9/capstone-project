import { restaurants } from "../../../lib/data.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";
import MenuListItem from "../../../components/MenuListItem/MenuListItem.js";
import ToReservePageButton from "../../../components/ToReservePageButton/ToReservePageButton";

export default function Menu() {
  const router = useRouter();
  if (!router.isReady) return <h2>loading</h2>;
  const { id } = router.query;

  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  const foods = restaurant.foods;

  return (
    <>
      <Heading previousLevelUrl={`/restaurants/${id}`}>
        {restaurant.name}
      </Heading>
      <BackgroundPhoto />
      <StyledSection>
        <StyledList role="list">
          {foods.length === 0 ? (
            <p>Tut mir leid! Es gibt noch keine Speisekarte.</p>
          ) : (
            foods.map((food) => <MenuListItem key={food.id} food={food} />)
          )}
        </StyledList>
      </StyledSection>
      <ToReservePageButton />
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

  opacity: 0.6;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
`;

const StyledSection = styled.section`
  margin: 4rem auto;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;

const StyledList = styled.ul`
  width: 100%;
`;
