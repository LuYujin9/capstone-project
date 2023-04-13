import { render, screen } from "@testing-library/react";
import ReservesListItem from ".";
const testReserve = {
  date: "03-04-2024",
  time: "11:00",
  restaurantName: "Lecker",
  restaurantId: "_dfaeflajefaei129127243",
  number_of_guests: 3,
  name: "Jane",
  phone: "123456789",
};

test("renders the date, time, number of guests,restaurantName, name of guest and phone of guest", () => {
  render(<ReservesListItem reserve={testReserve} />);
  const paragraphOne = screen.getByText(/03-04-2024 11:00 3 Personen/i);
  expect(paragraphOne).toBeInTheDocument();
  const paragraphTwo = screen.getByText(/Jane 123456789/i);
  expect(paragraphTwo).toBeInTheDocument();

  const link = screen.getByRole("link", { name: "Lecker" });
  expect(link).toBeInTheDocument();
});
