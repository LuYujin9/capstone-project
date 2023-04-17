import { StyledButton, StyledForm, StyledLegend } from "../styles";

export default function SearchRestaurantsForm({
  onMatchRestaurants,
  restaurants,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataForRestaurantsSearch = Object.fromEntries(formData);
    onMatchRestaurants(dataForRestaurantsSearch, restaurants);
  }
  return (
    <StyledForm
      aria-labelledby="formHeader"
      onSubmit={(event) => handleSubmit(event)}
    >
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
