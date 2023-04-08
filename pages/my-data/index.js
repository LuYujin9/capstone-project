import Link from "next/link";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";

export default function MyData() {
  return (
    <>
      <Heading>Meine Daten</Heading>
      <StyledSection>
        <StyledLink
          aria-label="Link zur Favoriten-Seite"
          href="/my-data/favorites"
        >
          Favoriten
        </StyledLink>
      </StyledSection>
    </>
  );
}

const StyledLink = styled(Link)`
  padding: 0.5rem 3rem;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
`;

const StyledSection = styled.section`
  margin: 5rem auto;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;
