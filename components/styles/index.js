import styled from "styled-components";
import Link from "next/link";

export const StyledMain = styled.main`
  margin: 3rem auto;
  padding: 0;
  min-height: calc(100vh - 6rem);

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--background-color);

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
  width: 15rem;
  padding: 0.1rem 1rem;
  margin: 0;

  text-align: center;
  display: flex;
  justify-content: space-around;

  color: var(--button-color);
  background: var(--background-color);
  text-decoration: none;
  border: 2px solid var(--button-color);
  border-radius: 5px;

  &:hover {
    background-color: var(--tag-color);
  }
`;

export const StyledButton = styled.button`
  width: 6rem;
  height: 1.5rem;

  align-self: center;

  border-radius: 15px;
  color: var(--white-color);
  background-color: var(--button-color);
  box-shadow: 2px 2px 5px 1px var(--white-color);
`;

export const AlertMessage = styled.p`
  font-size: 1.2rem;
  margin: 1rem 2rem;
`;

export const StyledForm = styled.form`
  width: 85%;
  padding: 0.5rem 5%;
  margin: 0.5rem auto;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  border-radius: 1rem;
  border: 2px solid var(--button-color);
`;

export const StyledFormTitle = styled.h3`
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
`;
