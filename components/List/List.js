import {
  StyledImage,
  StyledList,
  StyledLi,
  StyledName,
  StyledCuisine,
  StyledRating,
  StyledPicture,
} from "./List.styles";

export default function Card({ restaurants }) {
  return (
    <StyledList>
      {restaurants.map((restaurant) => (
        <StyledLi key={restaurant.id}>
          <StyledPicture>
            <StyledImage
              alt="photo of the restaurant"
              src={restaurant.photos}
              fill
              sizes="100vw"
              priority
            />
          </StyledPicture>

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
