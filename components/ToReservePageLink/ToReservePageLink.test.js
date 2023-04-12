import ToReservePageLink from ".";
import { render, screen } from "@testing-library/react";

test("renders the link", () => {
  render(<ToReservePageLink id={1} />);
  const link = screen.queryByRole("link");
  expect(link).toBeInTheDocument();
});
