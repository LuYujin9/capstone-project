import {
  StyledImage,
  StyledList,
  StyledLi,
  StyledName,
  StyledRating,
  StyledPicture,
} from "./List.styles";
import Link from "next/Link";

export default function Card({ restaurants }) {
  return (
    <StyledList>
      {restaurants.map((restaurant) => (
        <StyledLi key={restaurant.id}>
          <Link href={`/restaurants/${restaurant.id}`}>
            <StyledPicture>
              <StyledImage
                alt="photo of the restaurant"
                src={restaurant.photos[0]}
                fill
                sizes="100vw"
                priority
              />
            </StyledPicture>
          </Link>

          <StyledName>{restaurant.name}</StyledName>
          <p>{restaurant.cuisine}</p>
          <StyledRating>
            {restaurant.rating}{" "}
            <span role="img" aria-label="star">
              ⭐️
            </span>
          </StyledRating>
        </StyledLi>
      ))}
    </StyledList>
  );
}
