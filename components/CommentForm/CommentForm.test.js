import { render, screen } from "@testing-library/react";
import CommentForm from ".";
import userEvent from "@testing-library/user-event";

test("renders one textarea adn a button ", () => {
  render(<CommentForm />);
  const textarea = screen.getByText(/Kommentieren Sie hier:/i);
  const button = screen.getByRole("button");
  expect(textarea).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'comment'", () => {
  render(<CommentForm />);
  const form = screen.getByRole("form", { name: /comment/i });
  expect(form).toBeInTheDocument();
});

test("submit the form data when every field is filled out", async () => {
  const mockaddNewComment = jest.fn();
  render(
    <CommentForm
      addNewComment={mockaddNewComment}
      restaurant="restaurant"
      username="Jin"
    />
  );
  const user = userEvent.setup();
  const currentDate = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
  };
  const formattedtime = currentDate.toLocaleDateString("de-DE", options);

  const textarea = screen.getByText(/Kommentieren Sie hier:/i);
  const button = screen.getByRole("button");
  await user.type(textarea, "Leckes Restaurant.");
  await user.click(button);
  expect(mockaddNewComment).toHaveBeenCalledWith(
    `${formattedtime}`,
    {
      context: "Leckes Restaurant.",
    },
    "restaurant",
    "Jin"
  );
});
