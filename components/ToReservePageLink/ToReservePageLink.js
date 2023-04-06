import styled from "styled-components";
import Link from "next/link";

export default function ToReservePageLink({ id }) {
  return (
    <StyledLink
      aria-label="to reserve page"
      href={`/restaurants/reserve/${id}`}
    >
      Reservieren
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  padding: 0.3rem 1rem;

  position: fixed;
  right: 0.3rem;
  bottom: 3.3rem;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
`;
