import styled from "styled-components";
import Heading from "../../components/Heading";
import { StyledMain } from "../../components/styles";
import { StyledLink } from "../../components/styles";
import { ArrowUpRightIcon } from "../../public/icons";

export default function MyData({ username, onLogin }) {
  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        Meine Daten
      </Heading>
      <MainWithOutBackground>
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
      </MainWithOutBackground>
    </>
  );
}

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

const MainWithOutBackground = styled(StyledMain)`
  background-color: none;
`;
const BackgroundPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;

  background-color: lightgrey;
  background-image: url(/images/my-data-background.jpeg);
  background-repeat: repeat;
  background-size: cover;
  background-position: center top;

  opacity: 0.75;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
`;
