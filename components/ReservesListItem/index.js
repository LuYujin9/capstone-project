import Link from "next/link";
import { StyledButton } from "../../components/styles";
import { ArrowUpRightIcon } from "../../public/icons";
import { handleDelete } from "../../utils/handleDataUtils";
import styled from "styled-components";

export default function ReservesListItem({ reserve, mutateReserves }) {
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

  async function handleDeleteReserve(id) {
    await handleDelete(`/api/reserves/${id}`);
    mutateReserves();
  }

  return (
    <StyleListItem>
      <p>
        {date} &emsp; {time} &emsp; {number_of_guests}&nbsp;
        {number_of_guests === 1 ? "Person" : "Personen"}
      </p>
      <StyledLink href={`/restaurants/${restaurantId}`}>
        Restaurant: {restaurantName}&nbsp;
        <ArrowUpRightIcon
          alt="Pfeil Icon nach oben richts"
          color={`var(--red-vine-color)`}
        />
      </StyledLink>
      <p>
        {name}&emsp;Phone:{phone}
      </p>
      <p>{email}</p>
      <LinkToEdit
        href={`/my-data/reserves/${_id}`}
        aria-label="Zur Reservierung Änderen"
      >
        Änderen
      </LinkToEdit>
      <StyledButton
        aria-label="Stornieren die Reservierung"
        onClick={() => handleDeleteReserve(_id)}
      >
        Stornieren
      </StyledButton>
    </StyleListItem>
  );
}

const StyleListItem = styled.li`
  width: 95%;
  padding: 0.3rem;
  margin: 0.4rem auto;
  border-radius: 10px;

  list-style-type: none;
  background-color: white;
  box-shadow: 1px 1px 5px 2px var(--antique-color);
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
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: underline;
  margin: 0 0.2rem;
`;
