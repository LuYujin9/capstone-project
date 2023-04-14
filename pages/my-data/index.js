import styled from "styled-components";
import Heading from "../../components/Heading";
import { StyledMain } from "../../components/styles";
import { StyledLink } from "../../components/styles";
import { ArrowUpRightIcon } from "../../public/icons";

export default function MyData({ username, onLogin }) {
  return (
    <>
      <Heading isLoginWindowOpen={false} username={username} onLogin={onLogin}>
        Meine Daten
      </Heading>
      <StyledMain>
        <StyledSection>
          <StyledLink
            aria-label="Link zur Favoriten-Seite"
            href="/my-data/favorites"
          >
            Favoriten &nbsp;
            <ArrowUpRightIcon />
          </StyledLink>
          <StyledLink
            aria-label="Link zur Meine-Reservierungen-Seite"
            href="/my-data/reserves"
          >
            Reservierungen &nbsp;
            <ArrowUpRightIcon />
          </StyledLink>
        </StyledSection>
      </StyledMain>
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
