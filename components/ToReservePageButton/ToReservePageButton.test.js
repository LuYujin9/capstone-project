import ToReservePageButton from "./ToReservePageButton";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
      isReady: true,
    };
  },
}));

test("renders the button", () => {
  render(<ToReservePageButton id={1} />);
  const button = screen.queryByRole("button");
  expect(button).toBeInTheDocument();
});
