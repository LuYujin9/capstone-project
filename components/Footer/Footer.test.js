import { render, screen } from "@testing-library/react";
import Footer from ".";

jest.mock("next/router", () => ({
  router() {
    return { asPath: "/" };
  },
}));

test("renders the correct number of links", () => {
  render(<Footer />);
  const navigationLinks = screen.getAllByRole("link");
  expect(navigationLinks).toHaveLength(3);
});
