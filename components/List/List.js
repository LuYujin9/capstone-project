import {
  StyledImage,
  StyledList,
  StyledLi,
  StyledName,
  StyledRating,
  StyledPicture,
} from "./List.styles";
import Link from "next/link";

export default function Card({ restaurants }) {
  return (
    <StyledList>
      {restaurants.map((restaurant) => (
        <StyledLi key={restaurant.id}>
          <Link href={`/restaurants/${restaurant.id}`}>
            <StyledPicture>
              <StyledImage
                alt="a photo of the restaurant"
                src={restaurant.photos[0]}
                fill
                sizes="(min-width: 768px) 100vw"
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
