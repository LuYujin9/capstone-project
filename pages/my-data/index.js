import styled from "styled-components";
import Heading from "../../components/Heading";
import { StyledLink } from "../../components/styles";
import { ArrowUpRight } from "../../public/icons";

export default function MyData() {
  return (
    <>
      <Heading>Meine Daten</Heading>
      <StyledSection>
        <StyledLink
          aria-label="Link zur Favoriten-Seite"
          href="/my-data/favorites"
        >
          Favoriten &nbsp;
          <ArrowUpRight />
        </StyledLink>
        <StyledLink
          aria-label="Link zur Meine-Reservierungen-Seite"
          href="/my-data/reserves"
        >
          Reservierungen &nbsp;
          <ArrowUpRight />
        </StyledLink>
      </StyledSection>
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
