import styled from "styled-components";
import Link from "next/link";

export const StyledMain = styled.main`
  margin: 4rem auto;
  padding: 0;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
    left: 0;
    right: 0;
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
  margin-bottom: 0.5rem;

  align-self: center;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
  box-shadow: 2px 2px 5px 1px var(--linen-color);
`;

export const AlertMessage = styled.p`
  font-size: 1.2rem;
  margin: 3rem 2rem;
`;

export const StyledForm = styled.form`
  width: 85%;
  padding: 0.5rem 5%;
  margin: 0.5rem auto;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  border-radius: 1rem;
  border: 2px solid var(--red-vine-color);
`;

export const StyledLegend = styled.legend`
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
`;
