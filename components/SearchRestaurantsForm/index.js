import styled from "styled-components";
import { StyledButton } from "../styles";

export default function SearchRestaurantsForm({ onSearchRestaurants }) {
  return (
    <StyledForm aria-labelledby="formHeader" onSubmit={onSearchRestaurants}>
      <StyledLegend id="formHeader">Suchen verfügbare Plätze</StyledLegend>
      <label htmlFor="restaurantName">Restaurantname:</label>
      <input type="text" name="restaurantName" id="restaurantName"></input>
      <label htmlFor="cuisine">Küche:</label>
      <select name="cuisine" id="cuisine">
        <option value="">-- Wahlen Sie bitte eine Küche --</option>
        <option value="German">German</option>
        <option value="Italian">Italian</option>
        <option value="Asian">Asian</option>
        <option value="Indian">Indian</option>
        <option value="Turkish">Turkish</option>
      </select>
      <label htmlFor="city">Stadt:</label>
      <input type="city" name="city" id="city"></input>
      <StyledButton
        type="submit"
        aria-label="Button um entsprechende Restaurants anzeigen zu lassen"
      >
        Suchen
      </StyledButton>
    </StyledForm>
  );
}

const StyledLegend = styled.legend`
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
`;

const StyledForm = styled.form`
  width: 85%;
  padding: 1.5rem 5%;
  margin: 0.4rem auto;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  border: 2px solid var(--red-vine-color);
  border-radius: 1rem;
`;
