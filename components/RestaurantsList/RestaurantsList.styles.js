import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

export const StyledList = styled.ul`
  margin: 0.8rem auto;
  margin-bottom: 3rem;
  padding: 0;

  display: grid;

  @media only screen and (max-width: 799px) {
    width: 95%;
    gird: 80vw;
  }
  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
`;

export const StyledListItem = styled.li`
  margin: 0.5rem 0.5rem;
  width: 95%;

  display: block;

  border-radius: 1rem;
  background-color: var(--white-color);
  box-shadow: 1px 1px 8px 3px var(--frame-color);
`;

export const StyledName = styled.p`
  margin: 0.5rem 0 0 1rem;

  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
`;

export const StyledRating = styled.p`
  width: 4rem;
  text-align: center;

  border-radius: 0.5rem;
  background-color: var(--button-color);
  color: var(--white-color);
`;

export const PhotoContainer = styled.section`
  width: 100%;
  margin: 0;
  height: 20vh;

  position: relative;
  display: block;
`;
export const ContextContainer = styled.section`
  margin: 0 0.8rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  position: relative;
`;
