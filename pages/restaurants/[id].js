import Image from "next/image";
import { restaurants } from "../../lib/data.js";
import styled from "styled-components";
import Link from "next/Link";
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
      <Heading>{restaurant.name}</Heading>
      <StyledDiv>
        <StyledLink href="">Schauen die Speisekarte</StyledLink>
        <Album photos={restaurant.photos} />
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
    width: 80vw;
  }

  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;

const StyledLink = styled(Link)`
  width: 70%;
  padding: 0.5rem;
  font-size: 1.2rem;
  margin: 1rem;
  text-align: center;

  border: 2px solid black;
  color: black;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: var(--red-vine-color);
  }
`;
