import styled from "styled-components";
import { StyledMain } from "../../components/styles";
import CommentsList from "../../components/CommentsList";
import Album from "../../components/Album";
import Link from "next/link.js";
import Heading from "../../components/Heading";
import ToReservePageLink from "../../components/ToReservePageLink";
import BookmarkButton from "../../components/BookmarkButton";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Details({ onToggleFavorite, username, onLogin }) {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: restaurant,
    isLoading,
    error,
  } = useSWR(id ? `/api/restaurants/${id}` : null);
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });
  if (!userInfos || !restaurant || isLoading || error) return <h2>Loading</h2>;

  const matchedUserInfo = userInfos?.find(
    (info) => info.restaurantId === id && info.username === username
  );
  const comments = restaurant.comments;
  const isFavorite = matchedUserInfo ? matchedUserInfo.isFavorite : false;

  function handleToggleBookmark() {
    const newIsFavorite = !isFavorite;
    onToggleFavorite(matchedUserInfo, newIsFavorite, restaurant, username);
  }

  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        {restaurant.name}
      </Heading>
      <StyledMain>
        <StyledLink href={`/restaurants/menu/${id}`}>
          Zur Speisekarte
        </StyledLink>
        <BookmarkButton
          onToggleBookmark={handleToggleBookmark}
          isFavorite={isFavorite}
        />
        <Album photos={restaurant.photos} />
        <StyledParagraph>{restaurant.description}</StyledParagraph>
        <StyledParagraph>
          <b>Tel: </b>
          {restaurant.telephoneNumber}
        </StyledParagraph>
        <StyledParagraph>
          <b>Addresse: </b>
          {restaurant.address}
        </StyledParagraph>
        <CommentsList comments={comments} />
        <ToReservePageLink id={id} />
      </StyledMain>
    </>
  );
}

const StyledLink = styled(Link)`
  width: 60%;
  padding: 0.3rem;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.5rem 0;

  text-align: center;

  color: var(--red-vine-color);
  text-decoration: none;
  border: 2px solid var(--red-vine-color);
  border-radius: 5px;

  &:hover {
    background-color: var(--antique-color);
  }
`;

const StyledParagraph = styled.p`
  padding: 0.3rem 0;
  margin: 0;
  width: 90%;
  text-align: left;
`;
