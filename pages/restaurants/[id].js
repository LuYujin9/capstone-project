import { restaurants } from "../../lib/data.js";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Heading from "../../components/Heading/Heading";
import CommentsList from "../../components/CommentsList/CommentsList";
import Album from "../../components/Album/Album";

export default function Details() {
  const router = useRouter();

  if (!router.isReady) {
    return <h1>loading</h1>;
  }

  const { id } = router.query;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  const comments = restaurant.comments;

  return (
    <>
      <Heading previousLevelUrl="/restaurants" isShowButton={true}>
        {restaurant.name}
      </Heading>
      <StyledDiv>
        <LinkToMenu>Schauen die Speisekarte</LinkToMenu>
        <Album photos={restaurant.photos} />
        <StyledParagraph>{restaurant.description}</StyledParagraph>
        <CommentsList comments={comments} />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
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

const LinkToMenu = styled.p`
  width: 80%;
  padding: 0.3rem;
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  text-align: center;

  border: 2px solid black;
  color: black;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: var(--red-vine-color);
  }
`;

const StyledParagraph = styled.p`
  padding: 1rem 0;
  margin: 0 1.5rem;
  text-align: justify;
`;
