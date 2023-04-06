import styled from "styled-components";
import Link from "next/link";
import HomePageIcon from "../../public/icons/home_page";
import UserIcon from "../../public/icons/user";

export default function Footer() {
  return (
    <footer>
      <StyledNav>
        <StyledLink href="/" aria-label="to home page">
          <HomePageIcon color={`var(--red-vine-color)`} size="30px" />
        </StyledLink>
        <StyledLink href="/my-data" aria-label="to my data">
          <UserIcon color={`var(--red-vine-color)`} size="30px" />
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
