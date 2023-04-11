import { render, screen } from "@testing-library/react";
import RemainingSeatsFilter from "./RemainingSeatsFilter";
import userEvent from "@testing-library/user-event";

test("renders one input, six options, one select and a button ", () => {
  render(<RemainingSeatsFilter />);
  const input = screen.getByText(/Tag:/i);
  const select = screen.getByRole("combobox");
  const options = screen.getAllByRole("option");
  const button = screen.getByRole("button");
  expect(input).toBeInTheDocument();
  expect(select).toBeInTheDocument();
  expect(options).toHaveLength(6);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Suchen verfügbare Plätze'", () => {
  render(<RemainingSeatsFilter />);
  const form = screen.getByRole("form", { name: /Suchen verfügbare Plätze/i });
  expect(form).toBeInTheDocument();
});

test("submit the form data when every field is filled out", async () => {
  const mokeGetRemainingSeats = jest.fn();
  render(<RemainingSeatsFilter getRemainingSeats={mokeGetRemainingSeats} />);
  const user = userEvent.setup();
  const input = screen.getByText(/Tag:/i);
  const select = screen.getByRole("combobox");
  const button = screen.getByRole("button");
  await user.type(input, "2050-05-08");
  await user.type(select, "11:00");
  await user.click(button);
  expect(mokeGetRemainingSeats).toHaveBeenCalledWith({
    date: "2050-05-08",
    time: "11:00",
  });
});

test("submit the form data if date input field is left empty", async () => {
  const getRemainingSeats = jest.fn();
  render(<RemainingSeatsFilter getRemainingSeats={getRemainingSeats} />);
  const user = userEvent.setup();
  const button = screen.getByRole("button");
  await user.click(button);
  expect(getRemainingSeats).not.toHaveBeenCalledWith();
});
