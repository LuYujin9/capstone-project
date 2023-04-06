import { render, screen } from "@testing-library/react";
import ListCard from "./ListCard";
const testRestaurant = {
  id: "1",
  name: "Carolaschlösschen Dresden",
  rating: 4.4,
  photos: ["/images/CarolaschlÖsschen.jpg"],
  cuisine: "Deutsch",
  description:
    "defafejflaejfalfjeafljefaenvvleafmaefefaefal  dlejfa. efaejlfae  kefaek ",
};

test("renders the photos, name, cuisine, bookmark button and rating", () => {
  render(<ListCard restaurant={testRestaurant} />);
  const photo = screen.getByRole("img", { name: /photo of the restaurant/i });
  expect(photo).toBeInTheDocument();

  const name = screen.getByText(/Carolaschlösschen Dresden/i);
  expect(name).toBeInTheDocument();

  const cuisine = screen.getByText(/Deutsch/i);
  expect(cuisine).toBeInTheDocument();

  const rating = screen.getByText(/4.4/i);
  expect(rating).toBeInTheDocument();

  const bookmarkButton = screen.getByRole("button");
  expect(bookmarkButton).toBeInTheDocument();
});
