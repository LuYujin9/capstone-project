import {
  StyledImage,
  StyledListItem,
  StyledName,
  StyledRating,
  StyledPicture,
  CardContainer,
} from "../List.styles";
import Link from "next/link";
import BookmarkButton from "../../BookmarkButton/BookmarkButton";

export default function ListCard({ onToggleFavorite, userInfos, restaurant }) {
  const matchedInfo = userInfos?.find((info) => info.id === restaurant.id);
  const isFavorite = matchedInfo ? matchedInfo.isFavorite : false;
  function handleToggleBookmark() {
    onToggleFavorite(restaurant.id, restaurant);
  }
  return (
    <CardContainer key={restaurant.id}>
      <BookmarkButton
        onToggleBookmark={handleToggleBookmark}
        isFavorite={isFavorite}
      />
      <Link href={`/restaurants/${restaurant.id}`}>
        <StyledListItem>
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
        </StyledListItem>
      </Link>
    </CardContainer>
  );
}
