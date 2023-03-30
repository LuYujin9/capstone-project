import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const StyledList = styled.ul`
  margin: 5rem 1vw;
  padding: 0;

  display: grid;

  background-color: var(--linen-color);

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

export const StyledLi = styled.li`
  margin: 0.5rem 0.5rem;
  padding: 2.5%;
  width: 95%;

  display: block;

  border-radius: 1rem;
  background-color: var(--white-color);
  box-shadow: 2px 2px 10px 3px var(--linen-color);
`;

export const StyledName = styled.p`
  width: 100%;
  font-size: 1.2rem;
`;

export const StyledRating = styled.p`
  width: 4rem;

  text-align: center;

  border-radius: 0.5rem;
  background-color: var(--rosehip-color);
`;

export const StyledPicture = styled.picture`
  width: 100%;
  height: 20vh;

  position: relative;
  display: block;
`;
