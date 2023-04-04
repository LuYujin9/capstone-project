import { useRouter } from "next/router";
import styled from "styled-components";

export default function LinkToReserveButton() {
  const router = useRouter();
  if (!router.isReady) return <h2>loading</h2>;
  const { id } = router.query;

  function handleGoReservePage() {
    router.push(`/restaurants/reserve/${id}`);
  }
  return (
    <StyledButton
      type="button"
      aria-label="reserve"
      onClick={handleGoReservePage}
    >
      Reservieren
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 0.5rem;

  position: fixed;
  right: 0.3rem;
  bottom: 3.3rem;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
`;
