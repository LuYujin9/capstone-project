import styled from "styled-components";
import { useRouter } from "next/router";

export default function ToReservePageButton({ id }) {
  const router = useRouter();

  return (
    <StyledButton
      type="button"
      aria-label="reserve"
      onClick={() => router.push(`/restaurants/reserve/${id}`)}
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
