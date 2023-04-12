import styled from "styled-components";
import Link from "next/link";

export const StyledContainer = styled.div`
  margin: 4rem auto;
  padding: 0;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0.3rem 1rem;

  display: flex;

  border-radius: 5px;
  color: white;
  background-color: var(--red-vine-color);

  &:hover {
    background-color: var(--rain-storm-color);
  }
`;

export const StyledButton = styled.button`
  width: 6rem;
  padding: 0.3rem;
  margin: 1rem;

  align-self: center;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
  box-shadow: 2px 2px 5px 1px var(--linen-color);
`;
