import { restaurants } from "../../../lib/data.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";

export default function Menu() {
  const router = useRouter();

  if (!router.isReady) {
    return <h2>Loading...</h2>;
  }

  const { id } = router.query;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  const foods = restaurant.foods;

  return (
    <>
      <Heading previousLevelUrl={`/restaurants/${id}`}>
        {restaurant.name}
      </Heading>
      <StyledSection>
        <ul>
          {foods.map((food) => (
            <li key={food.id}>
              <p>{food.name}</p>
              <p>{food.description}</p>
              <p>{food.price}€</p>
            </li>
          ))}
        </ul>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin: 5rem auto;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;
