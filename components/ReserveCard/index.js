import Link from "next/link";

export default function ReserveCard({ reserve }) {
  const {
    date,
    time,
    restaurantName,
    restaurantId,
    number_of_guestsname,
    name,
    phone,
  } = reserve;
  return (
    <li>
      <p>{date + " " + time}</p>
      <Link href={`/restaurants/${restaurantId}`}>{restaurantName}</Link>
      <p>{number_of_guestsname}</p>
      <p>{name}</p>
      <p>{phone}</p>
    </li>
  );
}
