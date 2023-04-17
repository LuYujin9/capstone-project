import LoginModal from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("displays MessageModal when values of 'isOpen' and 'isLogin' are both true ", () => {
  render(
    <LoginModal isOpen={true} isLogin={true} username="Jin">
      test
    </LoginModal>
  );
  const form = screen.getByRole("form", { name: "Login" });
  const buttons = screen.getAllByRole("button");
  const inputs = screen.getAllByRole("textbox");

  expect(form).toBeInTheDocument();
  expect(buttons).toHaveLength(2);
  expect(inputs).toHaveLength(1);
});

test("doesn't display MessageModal when value of 'isOpen' is false ", () => {
  render(<LoginModal isOpen={false}>test</LoginModal>);
  const form = screen.queryByRole("form", { name: "Login" });
  const buttons = screen.queryAllByRole("button");
  const inputs = screen.queryAllByRole("textbox");
  const paragraphs = screen.queryAllByRole("paragraph");

  expect(form).not.toBeInTheDocument();
  expect(buttons).toHaveLength(0);
  expect(inputs).toHaveLength(0);
  expect(paragraphs).toHaveLength(0);
});

test("calls callback on click ", async () => {
  const mockClose = jest.fn();

  const user = userEvent.setup();
  render(
    <LoginModal isOpen={true} onClose={mockClose} isLogin={true}>
      test
    </LoginModal>
  );
  const button = screen.getByRole("button", {
    name: "Schließen die Nachricht",
  });
  await user.click(button);
  expect(mockClose).toBeCalled();
});
