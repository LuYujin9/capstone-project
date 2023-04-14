import styled from "styled-components";
import LoginModal from "../LoginModal";
import { ChevronLeftIcon, LoginIcon } from "../../public/icons";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Heading({
  children,
  isHideBackButton,
  username,
  isLoginWindowOpen,
  isHomepage,
  onLogin,
}) {
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(isLoginWindowOpen);
  return (
    <>
      <StyledHeader>
        <StyledButton
          type="button"
          onClick={() => router.back()}
          aria-label="Button zur nächste Seite"
          isHideBackButton={isHideBackButton}
        >
          <ChevronLeftIcon alt="Pfeil Icon nach links" />
        </StyledButton>
        <HeadingLineOne>{children}</HeadingLineOne>

        <StyledButton
          type="button"
          aria-label="Zeigt die Login-Fenster"
          isHideBackButton={false}
          onClick={() => setIsLoginModalOpen(true)}
        >
          <LoginIcon alt="Login icon" />
        </StyledButton>
      </StyledHeader>
      <LoginModal
        isOpen={isLoginModalOpen}
        username={username}
        isHomepage={isHomepage}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={onLogin}
      />
    </>
  );
}

const StyledButton = styled.button`
  border: none;
  width: 3rem;

  background-color: var(--rosehip-color);
  ${({ isHideBackButton }) => (isHideBackButton ? "visibility: hidden" : null)}
`;

const HeadingLineOne = styled.h1`
  margin: auto;
  width: 70vw;
  text-align: center;
  z-index: -1;
`;

const StyledHeader = styled.header`
  width: 100vw;
  height: 4rem;
  margin: 0;

  text-align: center;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  background-color: var(--rosehip-color);
  color: var(--red-vine-color);
`;
