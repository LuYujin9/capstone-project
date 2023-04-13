import { StyledMain } from "./RestaurantsList.styles";
import RestaurantsListItem from "./RestaurantsListItem";

export default function List({ restaurants, onToggleFavorite, userInfos }) {
  return (
    <StyledMain>
      <ul>
        {restaurants.map((restaurant) => (
          <RestaurantsListItem
            onToggleFavorite={onToggleFavorite}
            userInfos={userInfos}
            restaurant={restaurant}
            key={restaurant._id}
          />
        ))}
      </ul>
    </StyledMain>
  );
}
