import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

jest.mock("next/router", () => ({
  router() {
    return { asPath: "/" };
  },
}));

test("navbar link to homepage", () => {
  render(<NavBar />);
  const navagationLinks = screen.getAllByRole("link");

  expect(navagationLinks.length).toBe(1);
  expect(navagationLinks[0]).toHaveAttribute("href", "/");
});
