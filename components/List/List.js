import {
  StyledImage,
  StyledList,
  StyledCard,
  StyledName,
  StyledCuisine,
  StyledRating,
  StyledPicture,
} from "./List.styles";

//when data bank is create, id should be changed to _id
export default function Card({ restaurants }) {
  return (
    <StyledList>
      {restaurants.map((restaurant) => (
        <StyledCard key={restaurant.id}>
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
