import styled from "styled-components";
import { ArrowUpRightIcon } from "../../public/icons";
import { StyledLink } from "../styles";

export default function ToReservePageLink({ id }) {
  return (
    <ReservierenLink
      aria-label="Zur Reservieren-Seite"
      href={`/restaurants/reserve/${id}`}
    >
      Reservieren &nbsp;
      <ArrowUpRightIcon alt="Pfeil Icon nach oben rechts" />
    </ReservierenLink>
  );
}

const ReservierenLink = styled(StyledLink)`
position: fixed;
  right: 0.3rem;
  bottom: 3.3rem;)
`;
