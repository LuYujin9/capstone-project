import styled from "styled-components";
import Link from "next/link";
import { UserIcon, HomepageIcon, MapMarker } from "../../public/icons";

export default function Footer() {
  return (
    <footer>
      <StyledNav>
        <StyledLink href="/" aria-label="Zur Homepage">
          <HomepageIcon alt="Homepage Icon" />
        </StyledLink>
        <StyledLink href="/my-data" aria-label="Zu meine Daten">
          <UserIcon alt="Meschen Figur Icon" />
        </StyledLink>
        <StyledLink href="/map" aria-label="Zum Map">
          <MapMarker alt="Map Marker" />
        </StyledLink>
      </StyledNav>
    </footer>
  );
}
const StyledLink = styled(Link)`
  background-color: var(--frame-color);
`;

const StyledNav = styled.nav`
  margin: 0 auto;
  height: 3rem;
  width: 100vw;

  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--frame-color);
  z-index: 3;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
    left: 0;
    right: 0;
  }
`;
