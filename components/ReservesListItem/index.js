import Link from "next/link";
import { StyledButton } from "../../components/styles";
import { ArrowUpRightIcon } from "../../public/icons";
import { deleteData } from "../../utils/handleDataUtils";
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
    await deleteData(`/api/reserves/${id}`);
    mutateReserves();
  }

  return (
    <StyleListItem>
      <p>
        {date} &emsp; {time} &emsp; {number_of_guests}&nbsp;
        {number_of_guests === 1 ? "Person" : "Personen"}
      </p>
      <StyledLink href={`/restaurants/${restaurantId}`}>
        <b>Restaurant: </b>&nbsp;{restaurantName}
        <ArrowUpRightIcon
          alt="Pfeil Icon nach oben rechts"
          color={`var(--red-vine-color)`}
        />
      </StyledLink>
      <p>
        <b>Name: </b>
        {name} &emsp; <b>Phone: </b> {phone}
      </p>
      <p>{email}</p>
      <div>
        <LinkToEdit
          href={`/my-data/reserves/${_id}`}
          aria-label="Zur Änderung der Reservierung"
        >
          Ändern
        </LinkToEdit>
        <StyledButton
          aria-label="Reservierung stornieren"
          onClick={() => handleDeleteReserve(_id)}
        >
          Stornieren
        </StyledButton>
      </div>
    </StyleListItem>
  );
}

const StyleListItem = styled.li`
  width: 90%;
  padding: 0.5rem 2rem;
  margin: 0.4rem auto;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-content: end;
  align-items: space-around;

  list-style-type: none;
  background-color: white;
  box-shadow: 1px 1px 5px 2px var(--antique-color);
`;

const LinkToEdit = styled(Link)`
  padding: 0.25rem 1.7rem;
  margin: 1.2rem;
  font-size: 0.8rem;
  height: 1.5rem;

  align-self: center;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 0 0.2rem;
`;
