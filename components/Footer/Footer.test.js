import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("next/router", () => ({
  router() {
    return { asPath: "/" };
  },
}));

test("navbar link to homepage", () => {
  render(<Footer />);
  const navigationLink = screen.getByRole("link");

  expect(navigationLink).toHaveAttribute("href", "/");
});
