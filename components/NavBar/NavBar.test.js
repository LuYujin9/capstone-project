import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

jest.mock("next/router", () => ({
  router() {
    return { asPath: "/" };
  },
}));

test("navbar link to homepage", () => {
  render(<NavBar />);
  const navigationLink = screen.getByRole("link");

  expect(navigationLink).toHaveAttribute("href", "/");
});
