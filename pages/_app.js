import GlobalStyle from "../styles";
import Head from "next/head";
import Footer from "../components/Footer";
import { useSWRConfig, SWRConfig } from "swr";
import { useState } from "react";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((response) => response.json());
export default function App({ Component, pageProps }) {
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const [username, setUsername] = useState();
  const [restaurantsMatchingTheSearch, setRestaurantsMatchingTheSearch] =
    useState([]);
  const [isMatchingRestaurants, setIsMatchingRestaurants] = useState(true);

  function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setUsername(data.username);
    event.target.reset();
  }

  function handleMatchRestaurants(dataForRestaurantsSearch, restaurants) {
    const { restaurantName, cuisine, city } = dataForRestaurantsSearch;
    const matchingRestaurants = restaurants
      .filter(
        (restaurant) =>
          restaurant.name.toUpperCase() === restaurantName.toUpperCase() ||
          restaurantName === ""
      )
      .filter((restaurant) => restaurant.cuisine === cuisine || cuisine === "")
      .filter(
        (restaurant) =>
          restaurant.city.toUpperCase() === city.toUpperCase() || city === ""
      );
    setRestaurantsMatchingTheSearch(matchingRestaurants);
    setIsMatchingRestaurants(matchingRestaurants.length !== 0);
    if (matchingRestaurants.length !== 0) router.push("/restaurants");
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
          onMatchRestaurants={handleMatchRestaurants}
          restaurantsMatchingTheSearch={restaurantsMatchingTheSearch}
          isMatchingRestaurants={isMatchingRestaurants}
        />
        <Footer />
      </SWRConfig>
    </>
  );
}
