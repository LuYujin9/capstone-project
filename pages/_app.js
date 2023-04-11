import GlobalStyle from "../styles";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { useSWRConfig, SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { mutate } = useSWRConfig();

  async function updateIsFavorite(isFavorite, id) {
    const response = await fetch(`/api/user-infos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ isFavorite: isFavorite }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(response.status);
    }
  }

  async function postUserInfo(newUserInfo) {
    const response = await fetch("/api/user-infos", {
      method: "POST",
      body: JSON.stringify(newUserInfo),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(response.status);
    }
  }

  async function handleToggleFavorite(
    matchedUserInfo,
    newIsFavorite,
    restaurant
  ) {
    if (matchedUserInfo) {
      const id = matchedUserInfo._id;
      await updateIsFavorite(newIsFavorite, id);
      mutate("/api/user-infos");
      return;
    }

    const newUserInfo = {
      restaurantId: restaurant._id,
      name_of_restaurant: restaurant.name,
      isFavorite: true,
      isReserved: false,
    };
    await postUserInfo(newUserInfo);
    mutate("/api/user-infos");
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Lecker Map</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} onToggleFavorite={handleToggleFavorite} />
        <Footer />
      </SWRConfig>
    </>
  );
}
