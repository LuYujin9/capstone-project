import { restaurants } from "../../lib/data.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import CommentsList from "../../components/CommentsList/CommentsList";
import Album from "../../components/Album/Album";
import Link from "next/link.js";
import Heading from "../../components/Heading/Heading";
import ToReservePageLink from "../../components/ToReservePageLink/ToReservePageLink";
import BookmarkButton from "../../components/BookMarkButton/BookMarkButton.js";

export default function Details({ onToggleBookmark }) {
  const router = useRouter();

  if (!router.isReady) {
    return <h2>Loading...</h2>;
  }

  const { id } = router.query;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  const comments = restaurant.comments;

  return (
    <>
      <Heading previousLevelUrl="/restaurants">{restaurant.name}</Heading>
      <StyledSection>
        <StyledLink href={`/restaurants/menu/${id}`}>
          Zur Speisekarte
        </StyledLink>
        <BookmarkButton
          onToggleBookmark={onToggleBookmark}
          id={id}
          restaurant={restaurant}
        />
        <Album photos={restaurant.photos} />
        <StyledParagraph>{restaurant.description}</StyledParagraph>
        <CommentsList comments={comments} />
      </StyledSection>
      <ToReservePageLink id={id} />
    </>
  );
}

const StyledSection = styled.section`
  margin: 5rem auto;
  padding: 0;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;

    left: 0;
    right: 0;
  }
`;
export const StyledContainer = styled.div`
  position: relative;
  margin: auto;
`;

const StyledLink = styled(Link)`
  width: 60%;
  padding: 0.3rem;
  font-size: 1.2rem;
  margin: 0.5rem 0 0.5rem 0;

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
  padding: 1rem 0;
  margin: 0 1.5rem;
  text-align: justify;
`;
