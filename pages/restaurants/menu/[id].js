import { restaurants } from "../../../lib/data.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";
import FoodCard from "../../../components/FoodCard/FoodCard.js";
import Image from "next/image.js";
import { useState, useEffect } from "react";

export default function Menu() {
  const [index, setIndex] = useState(0);
  const [FoodsInCurrentPage, setFoodsInCurrentPage] = useState([]);

  const router = useRouter();
  if (!router.isReady) {
    return <h2>Loading...</h2>;
  }
  const { id } = router.query;

  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  const foods = restaurant.foods;

  //Problem is here. 5 foods show in one page, it can't work because it re-render too many times.
  setFoodsInCurrentPage(foods.slice(index, index + 5));

  function handleToNextPage() {
    index < foods.length - 5 ? setIndex(index + 5) : null;
  }
  function handleToLastPage() {
    index > 4 ? setIndex(index - 5) : null;
  }
  console.log(foods.slice(index, index + 5));
  console.log(index);

  return (
    <>
      <Heading previousLevelUrl={`/restaurants/${id}`}>
        {restaurant.name}
      </Heading>
      <StyledSection>
        <StyledImage
          src="/images/menu-background.jpeg"
          alt="photo in background"
          fill
          sizes="(min-width: 768px) 100vw"
          priority
        />
        {index > 4 && (
          <button aria-label="to next page" onClick={handleToLastPage}>
            Last Page
          </button>
        )}
        <StyledList role="list">
          {FoodsInCurrentPage.map((food) => (
            <StyledListItem key={food.id}>
              <FoodCard food={food} />
            </StyledListItem>
          ))}
        </StyledList>
        {index < foods.length - 5 && (
          <button aria-label="to next page" onClick={handleToNextPage}>
            Next Page
          </button>
        )}
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin: 4rem auto;
  padding: 0;

  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
    height: 100vh;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;

const StyledList = styled.ul`
  width: 100%;
`;

const StyledListItem = styled.li`
  width: 94%;
  list-style-type: none;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
`;
