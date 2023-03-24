import { restaurants } from "../../resource/data";
import Image from "next/image";

//此处有id，建立数据库时需修改

export default function Restaurants() {
  return (
    <main>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Image
              alt="photo of the restaurant"
              src={restaurant.photos}
              width={200}
              height={200}
            />
            <p>{restaurant.name}</p>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.rating}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
