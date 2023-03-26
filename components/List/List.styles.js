import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const StyledList = styled.ul`
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
export const StyledCard = styled.li`
  margin: 0.5rem 0.5rem;
  padding: 5%;
  border-radius: 1rem;

  display: block;

  background-color: var(--white-color);
  box-shadow: 2px 2px 10px 3px var(--linen-color);

  width: 95%;
`;

export const StyledName = styled.p`
  width: 100%;

  font-size: 1.2rem;
`;

export const StyledCuisine = styled.p``;

export const StyledRating = styled.p`
  width: 4rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: var(--rosehip-color);
`;

export const StyledPicture = styled.picture`
  position: relative;
  display: block;

  width: 100%;
  height: 20vh;
`;

/* 
display: flex;
  flex-direction: column;
  align-items: center; */
