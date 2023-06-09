import Heading from ".";
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

test("displays the content", () => {
  render(<Heading>title</Heading>);
  const element = screen.getByText(/title/i);
  expect(element).toBeInTheDocument();
});
