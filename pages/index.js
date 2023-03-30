import { Inter } from "next/font/google";
import Link from "next/link";
import Heading from "../components/Heading/Heading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Heading previousLevelUrl="/" isShowButton={false}>
        Restaurants
      </Heading>
      <h2>search the restaurants</h2>
      <Link href="/restaurants">restaurant</Link>
    </>
  );
}
