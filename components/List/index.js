import { StyledList } from "./List.styles";
import ListCard from "./ListCard";

export default function List({ restaurants, onToggleFavorite, userInfos }) {
  return (
    <StyledList>
      {restaurants.map((restaurant) => (
        <ListCard
          onToggleFavorite={onToggleFavorite}
          userInfos={userInfos}
          restaurant={restaurant}
          key={restaurant._id}
        />
      ))}
    </StyledList>
  );
}
