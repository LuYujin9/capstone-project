import styled from "styled-components";

export default function MessageModal({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <Background>
          <Container className="modal">
            <Message>{children}</Message>
            <StyledButton
              aria-label="schließen die Nachricht"
              onClick={onClose}
            >
              Schließen
            </StyledButton>
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

  position: absolute;
  top: auto;
  left: auto;
  z-index: 3;

  background-color: var(--rosehip-color);
  border-radius: 15px;
`;

const Message = styled.p`
  padding: 0.2rem;
  text-align: justify;
  font-weight: bold;

  background-color: var(--rosehip-color);
  z-index: 3;
`;

const StyledButton = styled.button`
  width: 6rem;
  padding: 0.3rem;
  margin: 1rem;

  align-self: center;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
`;
