import { render, screen } from "@testing-library/react";
import List from "./List";
const testRestaurant = [
  {
    id: 1,
    name: "Carolaschlösschen Dresden",
    rating: 4.4,
    telephoneNumber: "03512506000",
    stadt: "Dresden",
    address: "Queralle 7, 01219 Dresden",
    menu: "/images",
    photos: "/images/CarolaschlÖsschen.jpg",
    cuisine: "Deutsch",
    description:
      "defafejflaejfalfjeafljefaenvvleafmaefefaefal  dlejfa. efaejlfae  kefaek ",
    comments: [
      {
        id: 1,
        context: "sehr Lecker. Ich will unbedingt noch mal besuchen.",
        date: "21-4-2021",
      },
    ],
  },
];

test("renders the photos, name, cuisine, and rating", () => {
  render(<List restaurants={testRestaurant} />);
  const photo = screen.getByRole("img", { name: /photo of the restaurant/i });
  expect(photo).toBeInTheDocument();

  const name = screen.getByText(/Carolaschlösschen Dresden/i);
  expect(name).toBeInTheDocument();

  const cuisine = screen.getByText(/Deutsch/i);
  expect(cuisine).toBeInTheDocument();

  const rating = screen.getByText(/4.4/i);
  expect(rating).toBeInTheDocument();
});
