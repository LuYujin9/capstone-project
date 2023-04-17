import { render, screen } from "@testing-library/react";
import SearchRestaurantsForm from ".";
import userEvent from "@testing-library/user-event";

test("renders two text inputs, one select and a button ", () => {
  render(<SearchRestaurantsForm />);
  const inputs = screen.getAllByRole("textbox");
  const select = screen.getByRole("combobox");
  const options = screen.getAllByRole("option");
  const button = screen.getByRole("button");
  expect(inputs).toHaveLength(2);
  expect(select).toBeInTheDocument();
  expect(options).toHaveLength(6);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Suchen verfügbare Plätze'", () => {
  render(<SearchRestaurantsForm />);
  const form = screen.getByRole("form", { name: /Suchen verfügbare Plätze/i });
  expect(form).toBeInTheDocument();
});

test("calls onMatchRestaurants function, when clicks the button 'Suchen", async () => {
  const mockOnMatchRestaurants = jest.fn();
  render(
    <SearchRestaurantsForm
      onMatchRestaurants={mockOnMatchRestaurants}
      restaurants="restaurants"
    />
  );
  const user = userEvent.setup();
  const Restaurantname = screen.getByRole("textbox", {
    name: "Restaurantname:",
  });
  const cuisine = screen.getByRole("combobox");
  const city = screen.getByRole("textbox", {
    name: "Stadt:",
  });
  const button = screen.getByRole("button");

  await user.type(Restaurantname, "Nelle");
  await user.selectOptions(cuisine, ["German"]);
  await user.type(city, "Berlin");
  await user.click(button);
  expect(cuisine).toBeInTheDocument();
  expect(mockOnMatchRestaurants).toHaveBeenCalledWith(
    {
      restaurantName: "Nelle",
      cuisine: "German",
      city: "Berlin",
    },
    "restaurants"
  );
});
