import { useRouter } from "next/router";
import styled from "styled-components";

export default function ReserveButton() {
  const router = useRouter();
  if (!router.isReady) return <h2>loading</h2>;
  const { id } = router.query;

  function handleGoReservePage() {
    router.push(`/restaurants/reserve/${id}`);
  }
  return (
    <StyledReserveButton
      type="button"
      aria-label="reserve"
      onClick={handleGoReservePage}
    >
      Direkt Reservieren
    </StyledReserveButton>
  );
}

const StyledReserveButton = styled.button`
  padding: 0.5rem;

  position: fixed;
  right: 0;
  bottom: 3rem;

  border: none;
  background-color: var(--red-vine-color);
  color: var(--linen-color);
  border-radius: 1rem;
  box-shadow: 2px 2px 10px 3px var(--linen-color);
`;
