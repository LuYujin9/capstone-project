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
        <ArrowUpRightIcon alt="Pfeil Icon nach oben rechts" />
      </StyledLink>
      <p>
        <b>Name: </b>
        {name} &emsp; <b>Phone: </b> {phone}
      </p>
      <p>{email}</p>
      <ButtonContainer>
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
      </ButtonContainer>
    </StyleListItem>
  );
}

const StyleListItem = styled.li`
  width: 90%;
  padding: 0.5rem 0.5rem;
  margin: 0.4rem auto;
  border-radius: 10px;
  list-style-type: none;

  display: flex;
  flex-direction: column;
  align-content: end;
  align-items: space-around;

  background-color: white;
  box-shadow: 1px 1px 3px 3px var(--tag-color);
`;

const LinkToEdit = styled(Link)`
  height: 1.5rem;
  padding: 0.25rem 1.7rem;
  margin: 1.2rem;
  border: none;
  font-size: 0.8rem;

  align-self: center;

  border-radius: 15px;
  color: var(--white-color);
  background-color: var(--button-color);
`;

const ButtonContainer = styled.section`
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  height: 1.5rem;
  display: flex;
  margin: 0 0.2rem;
  &:hover {
    color: var(--frame-color);
  }
`;
