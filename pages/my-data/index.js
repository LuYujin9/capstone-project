import styled from "styled-components";
import Heading from "../../components/Heading";
import { ArrowUpRightIcon } from "../../public/icons";
import { MainWithBackground, BackgroundPhoto } from "../../components/styles";
import Link from "next/link";

export default function MyData({ username, onLogin }) {
  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        Meine Daten
      </Heading>
      <MainWithBackground>
        <BackgroundPhoto />
        <StyledSection>
          <StyledLink
            aria-label="Zur Favoriten-Seite"
            href="/my-data/favorites"
          >
            Favoriten &nbsp;
            <ArrowUpRightIcon />
          </StyledLink>
          <StyledLink
            aria-label="Zur Meine-Reservierungen-Seite"
            href="/my-data/reserves"
          >
            Reservierungen &nbsp;
            <ArrowUpRightIcon />
          </StyledLink>
          <StyledLink
            aria-label="Zu Meiner Kommentar-Seite"
            href="/my-data/comments"
          >
            Kommentare &nbsp;
            <ArrowUpRightIcon />
          </StyledLink>
        </StyledSection>
      </MainWithBackground>
    </>
  );
}

const StyledMain = styled.main`
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

const StyledSection = styled.section`
  margin: 5rem auto;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;

const StyledLink = styled(Link)`
  width: 15rem;
  padding: 0.1rem 1rem;
  margin: 0;

  text-align: center;
  display: flex;
  justify-content: space-around;

  color: var(--button-color);
  text-decoration: none;
  border: 2px solid var(--button-color);
  border-radius: 5px;

  &:hover {
    background-color: var(--tag-color);
  }
`;
