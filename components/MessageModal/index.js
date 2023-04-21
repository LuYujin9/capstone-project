import styled from "styled-components";
import Link from "next/link";
import { XIcon, ArrowUpRightIcon } from "../../public/icons";

export default function MessageModal({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <Background>
          <Container className="modal">
            <StyledButton
              aria-label="Schließen die Nachricht"
              onClick={onClose}
            >
              <XIcon />
            </StyledButton>
            <Message>{children}</Message>
            <StyledLink
              aria-label="Zur Meine-Reservierungen-Seite"
              href="/my-data/reserves"
            >
              Meine Reservierungen &nbsp;
              <ArrowUpRightIcon alt="Pfeil Icon nach oben rechts" />
            </StyledLink>
          </Container>
        </Background>
      )}
    </>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: auto;
  left: auto;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  max-width: 30rem;
  width: 90%;
  margin: 35vh auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  background-color: var(--background-color);
  border-radius: 15px;
`;

const Message = styled.p`
  padding: 0.2rem;
  text-align: justify;
  font-weight: bold;
  margin-bottom: 1rem;
  z-index: 3;
`;

const StyledButton = styled.button`
  width: 3rem;
  padding: 0 0.3rem;
  font-weight: bold;

  align-self: end;

  border-radius: 15px;
  border: none;
  color: var(--red-vine-color);
  background-color: var(--background-color);
`;

const StyledLink = styled(Link)`
  width: 80%;
  padding: 0.1rem 1rem;
  margin: 0 auto;

  text-align: center;
  display: flex;
  justify-content: space-around;

  color: var(--button-color);
  text-decoration: none;
  border: 2px solid var(--button-color);
  border-radius: 5px;

  &:hover {
    background-color: var(--tag-color);
  }
`;
