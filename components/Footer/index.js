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
  background-color: var(--rosehip-color);
`;

const StyledNav = styled.nav`
  height: 3rem;
  width: 100vw;

  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--rosehip-color);
`;
