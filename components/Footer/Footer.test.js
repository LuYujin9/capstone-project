import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("next/router", () => ({
  router() {
    return { asPath: "/" };
  },
}));

test("navbar link to homepage", () => {
  render(<Footer />);
  const navigationLinks = screen.getAllByRole("link");
  expect(navigationLinks).toHaveLength(2);
});
