import { render, screen } from "@testing-library/react";
import MenuListItem from ".";

const testFood = {
  id: "1",
  name: "Winterlicher Blattsalat",
  price: "9.6",
  description: "Tomate, BlumenKohl, Karotte, Radieschen, Nüsse",
};

test("render the time and comment", () => {
  render(<MenuListItem key={testFood.id} food={testFood} />);

  const name = screen.getByText(/Winterlicher Blattsalat/i);
  const price = screen.getByText(/9.6/i);
  const description = screen.getByText(
    /Tomate, BlumenKohl, Karotte, Radieschen, Nüsse/i
  );

  expect(name).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
