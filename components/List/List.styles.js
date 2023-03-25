import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
  layout
`;

export const StyledList = styled.ul`
  margin: 5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledCard = styled.li`
  display: block;
  background-color: var(--white-color);
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 10px 3px var(--linen-color);
`;

export const StyledName = styled.p`
  width: 20rem;
  font-size: 1.2rem;
`;
export const StyledCuisine = styled.p``;

export const StyledRating = styled.p`
  width: 4rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: var(--rosehip-color);
`;
