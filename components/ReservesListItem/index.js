import Link from "next/link";
import { StyledButton } from "../../components/styles";
import { ArrowUpRightIcon } from "../../public/icons";
import { deleteData } from "../../utils/handleDataUtils";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
        <StyledButton
          onClick={() => router.push(`/my-data/reserves/${_id}`)}
          aria-label="Zur Änderung der Reservierung"
        >
          Ändern
        </StyledButton>
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

const ButtonContainer = styled.section`
  width: 100%;
  height: 1.8rem;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  height: 1.5rem;
  display: flex;
  margin: 0 0.2rem;
  &:hover {
    color: var(--frame-color);
  }
`;
