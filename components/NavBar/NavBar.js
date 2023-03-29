import styled from "styled-components";
import Link from "next/Link";
import HomePageIcon from "../../public/icons/home_page";

export default function NavBar() {
  return (
    <StyledNav>
      <StyledLink href="/">
        <HomePageIcon size="30px" />
      </StyledLink>
    </StyledNav>
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
