import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <h1>search the restaurants</h1>
        <Link href="/restaurants">restaurant</Link>
      </main>
    </>
  );
}
