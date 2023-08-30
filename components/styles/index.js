import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 3rem auto;
  padding: 0;
  min-height: calc(100vh - 6rem);
  width: 100vw;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  width: 82%;
  font-size: 1.2rem;
  margin: 1rem 2rem;

  @media only screen and (min-width: 650px) {
    width: 33em;
    margin: auto;
    margin-bottom: 2em;
  }
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

  @media only screen and (min-width: 650px) {
    width: 36.5em;
    margin: auto;
    margin-top: 2em;
  }
`;

export const StyledFormTitle = styled.h3`
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
`;

export const BackgroundPhoto = styled.div`
  width: 100vw;
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
`;

export const MainWithBackground = styled.main`
  width: 100vw;
  min-height: calc(100vh - 6rem);
  margin: 3rem auto;
  padding: 0;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
