import { Inter } from "next/font/google";
import Link from "next/link";
import Heading from "../components/Heading";
import { StyledMain } from "../components/styles";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ username, onLogin }) {
  return (
    <>
      <Heading
        isHideBackButton={true}
        username={username}
        isHomepage={true}
        onLogin={onLogin}
      >
        Lecker Map
      </Heading>
      <StyledMain>
        <h2>search the restaurants</h2>
        <Link href="/restaurants">restaurant</Link>
      </StyledMain>
    </>
  );
}
