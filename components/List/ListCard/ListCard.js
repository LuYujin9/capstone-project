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
  const matchedInfo = userInfos?.find(
    (info) => info.restaurantId === restaurant._id
  );
  const isFavorite = matchedInfo ? matchedInfo.isFavorite : false;
  function handleToggleBookmark() {
    onToggleFavorite(restaurant._id, restaurant);
  }
  return (
    <CardContainer key={restaurant._id}>
      <BookmarkButton
        onToggleBookmark={handleToggleBookmark}
        isFavorite={isFavorite}
      />
      <Link
        aria-label="Link zur individualen Restaurant-Seite "
        href={`/restaurants/${restaurant._id}`}
      >
        <StyledListItem>
          <StyledName>{restaurant.name}</StyledName>
          <StyledPicture>
            <StyledImage
              alt="Foto vom Restaurant"
              src={restaurant.photos[0]}
              fill
              sizes="(min-width: 768px) 100vw"
              priority
            />
          </StyledPicture>
          <p>{restaurant.cuisine}</p>
          <StyledRating>
            {restaurant.rating}{" "}
            <span role="img" aria-label="Stern">
              ⭐️
            </span>
          </StyledRating>
        </StyledListItem>
      </Link>
    </CardContainer>
  );
}
