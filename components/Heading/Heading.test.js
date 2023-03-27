import Heading from "./Heading";
import { render, screen } from "@testing-library/react";

test("test Heading content", () => {
  render(<Heading>title</Heading>);
  const element = screen.getByText(/title/i);
  expect(element).toBeInTheDocument();
});