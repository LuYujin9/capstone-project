import {
  StyledImage,
  StyledList,
  StyledLi,
  StyledName,
  StyledRating,
  StyledPicture,
  CardContainer,
} from "./List.styles";
import Link from "next/link";
import BookmarkButton from "../BookMarkButton/BookMarkButton";

export default function Card({ restaurants, onToggleBookmark }) {
  return (
    <StyledList>
      {restaurants.map((restaurant) => (
        <CardContainer key={restaurant.id}>
          <BookmarkButton
            onToggleBookmark={onToggleBookmark}
            id={restaurant.id}
            restaurant={restaurant}
          />
          <Link href={`/restaurants/${restaurant.id}`}>
            <StyledLi>
              <StyledName>{restaurant.name}</StyledName>
              <StyledPicture>
                <StyledImage
                  alt="a photo of the restaurant"
                  src={restaurant.photos[0]}
                  fill
                  sizes="(min-width: 768px) 100vw"
                  priority
                />
              </StyledPicture>
              <p>{restaurant.cuisine}</p>
              <StyledRating>
                {restaurant.rating}{" "}
                <span role="img" aria-label="star">
                  ⭐️
                </span>
              </StyledRating>
            </StyledLi>
          </Link>
        </CardContainer>
      ))}
    </StyledList>
  );
}
