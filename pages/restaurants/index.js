import List from "../../components/List/List";
import Head from "next/head";
import Heading from "../../components/Heading/Heading";
import { restaurants } from "../../lib/data";

export default function Restaurants() {
  return (
    <>
      <Head>
        <title>Lecker Map</title>
      </Head>
      <Heading />
      <main>
        <List restaurants={restaurants} />
      </main>
    </>
  );
}
