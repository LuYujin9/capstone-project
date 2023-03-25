//when data bank is create, id should be changed to _id

import {
  StyledImage,
  StyledList,
  StyledCard,
  StyledName,
  StyledCuisine,
  StyledRating,
} from "./List.styles";

export default function Card({ restaurants }) {
  return (
    <StyledList>
      {restaurants.map((restaurant) => (
        <StyledCard key={restaurant.id}>
          <StyledImage
            alt="photo of the restaurant"
            src={restaurant.photos}
            width={320}
            height={150}
          />

          <StyledName>{restaurant.name}</StyledName>
          <StyledCuisine>{restaurant.cuisine}</StyledCuisine>
          <StyledRating>
            {restaurant.rating}{" "}
            <span role="img" aria-label="star">
              ⭐️
            </span>
          </StyledRating>
        </StyledCard>
      ))}
    </StyledList>
  );
}

/* const StyledDiv = styled.div`
  @median only screen and (max-width: 768px) {
    width: 100vw;
  }
  @median only screen and (max-width: 1200px) {
    width: 50vw;
  }
  @median only screen and (min-width: 1200px) {
    width: 33vw;
  } ;
`; */
