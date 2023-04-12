import styled from "styled-components";
import { StyledLink } from "../../components/styles";
import { XIcon, ArrowUpRightIcon } from "../../public/icons";

export default function MessageModal({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <Background>
          <Container className="modal">
            <StyledButton
              aria-label="schließen die Nachricht"
              onClick={onClose}
            >
              <XIcon color={`var(--red-vine-color)`} />
            </StyledButton>
            <Message>{children}</Message>
            <StyledLink
              aria-label="Link zur Meine-Reservierungen-Seite"
              href="/my-data/reserves"
            >
              Meine Reservierungen &nbsp;
              <ArrowUpRightIcon />
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
  margin: 35vh 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  background-color: var(--rosehip-color);
  border-radius: 15px;
`;

const Message = styled.p`
  padding: 0.2rem;
  text-align: justify;
  font-weight: bold;
  margin-bottom: 2rem;

  background-color: var(--rosehip-color);
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
  background-color: var(--rosehip-color);
`;

/* position: absolute;
top: auto;
left: auto;
z-index: 3; */
