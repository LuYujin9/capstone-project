import { render, screen } from "@testing-library/react";
import BookmarkButton from ".";
import userEvent from "@testing-library/user-event";

test("renders the button", () => {
  render(<BookmarkButton />);
  const button = screen.getByRole("button", { name: /Toggle favorite or not/ });
  expect(button).toBeInTheDocument();
});

test("calls callback on every click  ", async () => {
  const user = userEvent.setup();
  const mockToggleBookmark = jest.fn();
  render(<BookmarkButton onToggleBookmark={mockToggleBookmark} />);
  const button = screen.getByRole("button");
  await user.click(button);
  await user.click(button);
  await user.click(button);
  expect(mockToggleBookmark).toBeCalledTimes(3);
});
