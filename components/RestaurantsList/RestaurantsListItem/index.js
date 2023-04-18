import {
  StyledImage,
  StyledListItem,
  StyledName,
  StyledRating,
  StyledPicture,
  CardContainer,
} from "../RestaurantsList.styles";
import Link from "next/link";
import BookmarkButton from "../../BookmarkButton";

export default function RestaurantsListItem({
  onToggleFavorite,
  userInfos,
  restaurant,
  username,
}) {
  const matchingUserInfo = userInfos?.find(
    (info) => info.restaurantId === restaurant._id && info.username === username
  );
  const isFavorite = matchingUserInfo ? matchingUserInfo.isFavorite : false;

  function handleToggleBookmark() {
    const newIsFavorite = !isFavorite;
    onToggleFavorite(matchingUserInfo, newIsFavorite, restaurant, username);
  }

  return (
    <CardContainer key={restaurant._id}>
      <BookmarkButton
        onToggleBookmark={handleToggleBookmark}
        isFavorite={isFavorite}
      />
      <Link
        aria-label="Zur individualen Restaurant-Seite "
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
          <p>
            {restaurant.cuisine} •{restaurant.priceLevel}
          </p>
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
