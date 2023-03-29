import Image from "next/image";
import { restaurants } from "../../lib/data.js";
import styled from "styled-components";
import Link from "next/Link";
import { useRouter } from "next/router";
import Heading from "../../components/Heading/Heading";
import CommentsList from "../../components/CommentsList/CommentsList";

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
      <StyledSection>
        <StyledLink href="">Schauen die Speisekarte</StyledLink>
        <StyledPicture>
          <StyledImage
            alt="a photo of the restaurant"
            src={restaurant.photos[0]}
            fill
            size="100vw"
            priority
          />
        </StyledPicture>
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
    background-color: var(--antique-color);
  }
`;
const StyledPicture = styled.picture`
  width: 100%;
  height: 30vh;

  position: relative;
  display: block;
`;
const StyledImage = styled(Image)`
  object-fit: cover;
`;
