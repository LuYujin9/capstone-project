import Link from "next/link";
import { StyledLink, StyledButton } from "../../components/styles";
import { ArrowUpRightIcon } from "../../public/icons";
import styled from "styled-components";

export default function ReservesListItem({ reserve }) {
  const {
    _id,
    date,
    time,
    restaurantName,
    restaurantId,
    number_of_guests,
    name,
    phone,
    email,
  } = reserve;

  return (
    <StyleListItem>
      <p>
        {date} &emsp; {time} &emsp; {number_of_guests}&nbsp;
        {number_of_guests === 1 ? "Person" : "Personen"}
      </p>
      <StyledLink href={`/restaurants/${restaurantId}`}>
        {restaurantName}&nbsp;
        <ArrowUpRightIcon alt="Pfeil Icon nach oben richts" />
      </StyledLink>
      <p>
        {name}&emsp;{phone}
      </p>
      <p>{email}</p>
      <LinkToEdit
        href={`/my-data/reserves/${_id}`}
        aria-label="Zur Reservierung Änderen"
      >
        Änderen
      </LinkToEdit>
      <StyledButton aria-label="Stornieren die Reservierung">
        Stornieren
      </StyledButton>
    </StyleListItem>
  );
}

const StyleListItem = styled.li`
  width: 95%;
  padding: 0.3rem;
  margin: 0.4rem auto;
  border-radius: 5px;

  list-style-type: none;
  background-color: var(--white-color);
`;

const LinkToEdit = styled(Link)`
  padding: 0.3rem 1.3rem;
  margin: 1rem;
  font-size: 0.8rem;

  align-self: center;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
  box-shadow: 2px 2px 5px 1px var(--linen-color);
`;
