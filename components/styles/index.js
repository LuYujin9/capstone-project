import styled from "styled-components";

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

export const StyledButton = styled.button`
  width: 6rem;
  height: 1.5rem;
  margin-top: 0.3rem;

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
  padding: 1rem 5%;
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

export const BackgroundPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;

  background-color: lightgrey;
  background-image: url(/images/background.jpg);
  background-repeat: repeat;
  background-size: cover;
  background-position: center top;

  opacity: 0.7;
  margin: auto;
  min-height: 100vh;
  z-index: -1;
  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;

export const MainWithBackground = styled.main`
  margin: 3rem auto;
  padding: 0;
  min-height: calc(100vh - 6rem);

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
