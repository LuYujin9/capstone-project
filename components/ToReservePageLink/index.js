import styled from "styled-components";
import { ArrowUpRightIcon } from "../../public/icons";
import Link from "next/link";

export default function ToReservePageLink({ id }) {
  return (
    <ReservierenLink
      aria-label="Zur Reservieren-Seite"
      href={`/restaurants/reserve/${id}`}
    >
      Reservieren &nbsp;
      <ArrowUpRightIcon alt="Pfeil Icon nach oben rechts" color="white" />
    </ReservierenLink>
  );
}

const ReservierenLink = styled(Link)`
  padding: 0.15rem 0.5rem;
  width: 15rem;
  margin: 0;
  font-size: 1rem;
  text-decoration: none;

  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 3rem;
  right: auto;
  left: auto;

  border-radius: 30px 30px 0 0;
  color: var(--white-color);
  background-color: var(--frame-color);

  &:hover {
    background-color: var(--button-color);
  }
`;
