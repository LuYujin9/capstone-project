import Image from "next/image";
import { restaurants } from "../../lib/data";
import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  /* 
  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]); */

  console.log(id);
  const restaurant = restaurants.find((restaurant) => restaurant?.id === 3);
  console.log(restaurant);
  const comments = restaurant.comments;

  return (
    <StyledSection>
      <Link href="/">Schauen die Speisekarte</Link>
      <StyledPicture>
        <StyledImage
          alt="a photo of the restaurant"
          src={restaurant.photos[0]}
          fill
          sizes="100vw"
          priority
        />
      </StyledPicture>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} role="list">
            <p>{comment.context}</p>
            <p>{comment.time}</p>
          </li>
        ))}
      </ul>{" "}
    </StyledSection>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
`;
const StyledPicture = styled.picture`
  width: 100%;
  height: 50vh;

  position: relative;
  display: block;
`;

const StyledSection = styled.section`
  margin: 5rem 1vw;
  padding: 0;

  display: grid;

  @media only screen and (max-width: 799px) {
    gird: 80vw;
  }
  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
