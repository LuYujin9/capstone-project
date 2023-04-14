import styled from "styled-components";
import { StyledButton } from "../../components/styles";
import { XIcon } from "../../public/icons";

export default function LoginModal({
  isOpen,
  onClose,
  username,
  onLogin,
  isHomepage,
}) {
  return (
    <>
      {isOpen && (
        <Background>
          <Container className="modal">
            <CloseButton aria-label="schließen die Nachricht" onClick={onClose}>
              <XIcon color={`var(--red-vine-color)`} />
            </CloseButton>

            {isHomepage ? (
              <Message>
                Bitten geben Sie einen Username order schließen dieses Fenster
                und benutzen “Gast” als username.
              </Message>
            ) : (
              <Message>
                Der Username ist jetzt {username}. Möchten Sie ändern?
              </Message>
            )}

            <form aria-labelledby="Login" onSubmit={(event) => onLogin(event)}>
              <label htmlFor="username">Schreiben Sie hier den Username:</label>
              <input type="text" name="username" id="username" required></input>
              <StyledButton type="submit" aria-label="Button um abzuschicken">
                Abschicken
              </StyledButton>
            </form>
          </Container>
        </Background>
      )}
    </>
  );
}

const Background = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: auto;
  left: auto;
  z-index: 4;

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
  z-index: 5;
`;

const CloseButton = styled.button`
  width: 3rem;
  padding: 0 0.3rem;
  font-weight: bold;

  align-self: end;

  border-radius: 15px;
  border: none;
  color: var(--red-vine-color);
  background-color: var(--rosehip-color);
`;
