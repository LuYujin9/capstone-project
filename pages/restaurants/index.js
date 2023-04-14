import RestaurantsList from "../../components/RestaurantsList";
import Heading from "../../components/Heading";
import LoginModal from "../../components/LoginModal";
import { StyledMain } from "../../components/styles";
import { useState } from "react";
import useSWR from "swr";

export default function Restaurants({ onToggleFavorite, username }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

  const { data: restaurants } = useSWR("/api/restaurants", {
    fallbackData: [],
  });
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });

  return (
    <>
      <Heading>Restaurants</Heading>
      <LoginModal
        isOpen={isLoginModalOpen}
        username={username}
        isHomepage={false}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <StyledMain>
        <RestaurantsList
          restaurants={restaurants}
          onToggleFavorite={onToggleFavorite}
          userInfos={userInfos}
        />
      </StyledMain>
    </>
  );
}

{
}
