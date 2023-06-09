import MessageModal from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("displays MessageModal when value of 'isOpen' is true ", () => {
  render(<MessageModal isOpen={true}>test</MessageModal>);
  const button = screen.getByRole("button");
  const paragraph = screen.getByText("test");

  expect(button).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});

test("doesn't display MessageModal when value of 'isOpen' is false ", () => {
  render(<MessageModal isOpen={false}>test</MessageModal>);
  const button = screen.queryByRole("button");
  const paragraph = screen.queryByRole("test");

  expect(button).not.toBeInTheDocument();
  expect(paragraph).not.toBeInTheDocument();
});

test("calls callback on click ", async () => {
  const mockClose = jest.fn();
  const user = userEvent.setup();
  render(
    <MessageModal isOpen={true} onClose={mockClose}>
      test
    </MessageModal>
  );
  const button = screen.getByRole("button");
  await user.click(button);
  expect(mockClose).toBeCalled();
});
