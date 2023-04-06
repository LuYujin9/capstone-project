import { StyledList } from "./List.styles";
import ListCard from "./ListCard/ListCard";

export default function List({ restaurants, onToggleFavorite, userInfos }) {
  return (
    <StyledList>
      {restaurants.map((restaurant) => (
        <ListCard
          onToggleFavorite={onToggleFavorite}
          userInfos={userInfos}
          restaurant={restaurant}
          key={restaurant.id}
        />
      ))}
    </StyledList>
  );
}
