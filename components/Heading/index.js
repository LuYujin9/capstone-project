import styled from "styled-components";
import { ChevronLeftIcon } from "../../public/icons";
import { useRouter } from "next/router";

export default function Heading({ children, isHideBackButton }) {
  const router = useRouter();

  return (
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
    </StyledHeader>
  );
}

const StyledButton = styled.button`
  border: none;
  width: 4rem;

  background-color: var(--rosehip-color);
  ${({ isHideBackButton }) => (isHideBackButton ? "visibility: hidden" : null)}
`;

const HeadingLineOne = styled.h1`
  width: 70vw;
  position: absolute;
left 15vw;
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
  align-items: center;

  background-color: var(--rosehip-color);
  color: var(--red-vine-color);
`;
