import { restaurants } from "../../lib/data.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Heading from "../../components/Heading/Heading";
import CommentsList from "../../components/CommentsList/CommentsList";
import Album from "../../components/Album/Album";

export default function Details() {
  const router = useRouter();

  if (!router.isReady) {
    return <h2>Loading...</h2>;
  }

  const { id } = router.query;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  const comments = restaurant.comments;

  return (
    <>
      <Heading previousLevelUrl="/restaurants" isShowButton={true}>
        {restaurant.name}
      </Heading>
      <StyledSection>
        <StyledArticle>Zur Speisekarte</StyledArticle>
        <Album photos={restaurant.photos} />
        <StyledParagraph>{restaurant.description}</StyledParagraph>
        <CommentsList comments={comments} />
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin: 5rem auto;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;

const StyledArticle = styled.article`
  width: 80%;
  padding: 0.3rem;
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;

  text-align: center;

  color: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 5px;

  &:hover {
    background-color: var(--red-vine-color);
  }
`;

const StyledParagraph = styled.p`
  padding: 1rem 0;
  margin: 0 1.5rem;
  text-align: justify;
`;
