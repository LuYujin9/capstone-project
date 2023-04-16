import GlobalStyle from "../styles";
import Head from "next/head";
import Footer from "../components/Footer";
import { useSWRConfig, SWRConfig } from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());
export default function App({ Component, pageProps }) {
  const { mutate } = useSWRConfig();

  const [username, setUsername] = useState();
  function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setUsername(data.username);
    event.target.reset();
  }

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
    restaurant,
    username
  ) {
    if (matchedUserInfo) {
      const id = matchedUserInfo._id;
      await updateIsFavorite(newIsFavorite, id);
      mutate("/api/user-infos");
      return;
    }

    const newUserInfo = {
      username: username,
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
        <Component
          {...pageProps}
          onToggleFavorite={handleToggleFavorite}
          username={username}
          onLogin={handleLogin}
        />
        <Footer />
      </SWRConfig>
    </>
  );
}
