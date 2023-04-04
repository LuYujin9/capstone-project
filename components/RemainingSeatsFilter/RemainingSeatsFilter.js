import styled from "styled-components";

export default function RemainingSeatsFilter({ searchRemainingSeats }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataForSearch = Object.fromEntries(formData);
    searchRemainingSeats(dataForSearch);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLegend>Suchen verfügbare Plätze</StyledLegend>
      <label htmlFor="date">Tag:</label>
      <input type="date" name="date" id="date" required></input>
      <label htmlFor="time">Zeit:</label>
      <select name="time" id="time" required>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
      </select>
      <StyledSubmitButton
        type="submit"
        aria-label="button to search the remaining seats"
      >
        Suchen
      </StyledSubmitButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 85%;
  padding: 0.5rem 5%;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  border: 2px solid var(--red-vine-color);
  border-radius: 1rem;
`;
// box-shadow: 2px 2px 10px 3px var(--linen-color);

const StyledLegend = styled.legend`
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
`;

const StyledSubmitButton = styled.button`
  width: 6rem;
  padding: 0.3rem;
  margin: 0.5rem;

  align-self: center;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
  box-shadow: 2px 2px 5px 1px var(--linen-color);
`;
