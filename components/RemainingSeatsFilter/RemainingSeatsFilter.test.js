import { render, screen } from "@testing-library/react";
import RemainingSeatsFilter from ".";
import userEvent from "@testing-library/user-event";

test("renders one input, six options and one select", () => {
  render(<RemainingSeatsFilter />);
  const input = screen.getByText(/Tag:/i);
  const select = screen.getByRole("combobox");
  const options = screen.getAllByRole("option");
  expect(input).toBeInTheDocument();
  expect(select).toBeInTheDocument();
  expect(options).toHaveLength(7);
});

test("renders a form with the accessible name 'Suchen verfügbare Plätze'", () => {
  render(<RemainingSeatsFilter />);
  const form = screen.getByRole("form", { name: /Suchen verfügbare Plätze/i });
  expect(form).toBeInTheDocument();
});

test("calls the call back function when every field is filled out", async () => {
  const mockGetRemainingSeats = jest.fn();
  render(<RemainingSeatsFilter getRemainingSeats={mockGetRemainingSeats} />);
  const user = userEvent.setup();
  const input = screen.getByText(/Tag:/i);
  const select = screen.getByRole("combobox");
  await user.type(input, "2050-05-08");
  await user.selectOptions(select, ["11:00"]);
  expect(mockGetRemainingSeats).toHaveBeenCalledWith({
    date: "2050-05-08",
    time: "11:00",
  });
});

test("doesn't call the call back function when a input field is left empty", async () => {
  const getRemainingSeats = jest.fn();
  render(<RemainingSeatsFilter getRemainingSeats={getRemainingSeats} />);
  const user = userEvent.setup();
  const input = screen.getByText(/Tag:/i);
  await user.type(input, "2050-05-08");
  expect(getRemainingSeats).not.toHaveBeenCalledWith();
});
