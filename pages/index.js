import { Inter } from "next/font/google";
import Link from "next/link";
import Heading from "../components/Heading/Heading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Heading>Restaurants</Heading>
      <h1>search the restaurants</h1>
      <Link href="/restaurants">restaurant</Link>
    </>
  );
}
