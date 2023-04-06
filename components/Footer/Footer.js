import styled from "styled-components";
import Link from "next/link";
import HomePageIcon from "../../public/icons/home_page";
import UserIcon from "../../public/icons/user";

export default function Footer() {
  return (
    <footer>
      <StyledNav>
        <StyledLink href="/" aria-label="Link zum Homepage">
          <HomePageIcon alt="Homepage Icon" />
        </StyledLink>
        <StyledLink href="/my-data" aria-label="Link zum meine Daten">
          <UserIcon alt="Meschen Figur Icon" />
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
