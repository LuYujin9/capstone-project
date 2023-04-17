import { render, screen } from "@testing-library/react";
import ReserveForm from ".";
import userEvent from "@testing-library/user-event";

test("renders two text inputs, two number iputs and a button ", () => {
  render(<ReserveForm />);
  const textInputs = screen.getAllByRole("textbox");
  const numberInputs = screen.getAllByRole("spinbutton");
  const button = screen.getByRole("button");
  expect(textInputs).toHaveLength(3);
  expect(numberInputs).toHaveLength(1);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Reservieren die Plätze'", () => {
  render(<ReserveForm />);
  const form = screen.getByRole("form", { name: /Reservieren die Plätze/i });
  expect(form).toBeInTheDocument();
});

test("submit the form data when 'number_of_guests','name','phone' inputs are filled out", async () => {
  const mockOnPostNewReserve = jest.fn();
  const mockEditRemainingSeats = jest.fn();
  render(
    <ReserveForm
      onReserve={mockOnPostNewReserve}
      editRemainingSeats={mockEditRemainingSeats}
      restaurant="restaurant"
      date="2023-04-08"
      time="11:00"
      username="Jane"
    />
  );
  const user = userEvent.setup();
  const numberOfGuestsInput = screen.getByRole("spinbutton", {
    name: "Personen:",
  });
  const nameInput = screen.getByRole("textbox", { name: "Name:" });
  const phoneInput = screen.getByRole("textbox", {
    name: "Telefonummber:",
  });
  const button = screen.getByRole("button");

  await user.type(numberOfGuestsInput, "5");
  await user.type(nameInput, "Jane");
  await user.type(phoneInput, "20192039183");
  await user.click(button);

  expect(mockOnPostNewReserve).toHaveBeenCalledWith(
    {
      number_of_guests: "5",
      name: "Jane",
      email: "",
      phone: "20192039183",
    },
    "restaurant",
    "2023-04-08",
    "11:00",
    "Jane"
  );
});

test("doesn't submit the form data if one of the three required input fields is left empty", async () => {
  const mockReserve = jest.fn();
  render(<ReserveForm onStoreReserveData={mockReserve} />);
  const user = userEvent.setup();

  const numberOfGuestsInput = screen.getByRole("spinbutton", {
    name: "Personen:",
  });
  const nameInput = screen.getByRole("textbox", { name: "Name:" });
  const button = screen.getByRole("button");

  await user.type(numberOfGuestsInput, "5");
  await user.type(nameInput, "Jane");
  await user.click(button);

  expect(mockReserve).not.toHaveBeenCalledWith();
});
