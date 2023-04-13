import { StyledLink } from "../../components/styles";
import { ArrowUpRightIcon } from "../../public/icons";
import styled from "styled-components";

export default function ReservesListItem({ reserve }) {
  const {
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
