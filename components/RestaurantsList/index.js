import { StyledList, StyledMain } from "./RestaurantsList.styles";
import RestaurantsListItem from "./RestaurantsListItem";

export default function RestaurantsList({
  restaurants,
  onToggleFavorite,
  userInfos,
}) {
  return (
    <StyledList>
      {restaurants.map((restaurant) => (
        <RestaurantsListItem
          onToggleFavorite={onToggleFavorite}
          userInfos={userInfos}
          restaurant={restaurant}
          key={restaurant._id}
        />
      ))}
    </StyledList>
  );
}
