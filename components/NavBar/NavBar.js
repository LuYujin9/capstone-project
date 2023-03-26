import styled from "styled-components";
import Link from "next/link";
import HomePageIcon from "../../lib/icons/home_page";

const StyledLink = styled(Link)`
  background-color: var(--rosehip-color);
`;

const Nav = styled.nav`
  height: 3rem;
  width: 100vw;

  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--rosehip-color);
`;

export default function NavBar() {
  return (
    <Nav>
      <StyledLink href="/">
        <span aria-label="go back to the last page">
          <HomePageIcon size="30px" />
        </span>
      </StyledLink>
      <div></div>
      <div></div>
    </Nav>
  );
}
