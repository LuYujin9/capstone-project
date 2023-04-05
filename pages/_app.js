import GlobalStyle from "../styles";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { useImmerLocalStorageState } from "../lib/useImmerLocalStorageState";
import { uid } from "uid";
import { useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [userInfos, updateUserInfos] = useImmerLocalStorageState(
    "lecker-map-user-info",
    {
      defaultValue: [],
    }
  );
  const [reserveMessege, setReservMessege] = useState();
  const router = useRouter();

  function handleReserve(reserveData, restaurant, date, time) {
    const { number_of_guests, name, email, phone } = reserveData;
    const matchedInfo = userInfos.find((info) => info.id === restaurant.id);

    updateUserInfos(() => {
      if (matchedInfo) {
        return userInfos.map((info) =>
          info.id === restaurant.id
            ? {
                id: restaurant.id,
                name_of_restaurant: restaurant.name,
                isFavorite: info.isFavorite,
                isReserved: true,
                reserves: [
                  ...info.reserves,
                  {
                    reserveId: uid(),
                    name: name,
                    email: email,
                    number_of_guests: number_of_guests,
                    phone: phone,
                    date: date,
                    time: time,
                  },
                ],
              }
            : info
        );
      }

      return [
        ...userInfos,
        {
          id: restaurant.id,
          name_of_restaurant: restaurant.name,
          isFavorite: false,
          isReserved: true,
          reserves: [
            {
              reserveId: uid(),
              name: name,
              email: "",
              number_of_guests: number_of_guests,
              phone: phone,
              date: date,
              time: time,
            },
          ],
        },
      ];
    });

    setReservMessege(
      `Sie haben erfolgereich am ${date} um ${time} Uhr ${number_of_guests}  ${
        number_of_guests == 1 ? "Platz" : "Plätze"
      } in ${restaurant.name} reservert.`
    );
    router.push("/restaurants/reserve/reserveMessage");
  }

  function handleToggleBookmark(id, restaurant) {
    console.log("clicked");
    const matchedInfo = userInfos.find((info) => info.id === id);
    updateUserInfos(() => {
      if (matchedInfo) {
        return userInfos.map((info) =>
          info.id === id
            ? {
                id: info.id,
                name_of_restaurant: info.name,
                isFavorite: !info.isFavorite,
                isReserved: info.isReserved,
                reserves: info.reserves,
              }
            : info
        );
      }

      return [
        ...userInfos,
        {
          id: restaurant.id,
          name_of_restaurant: restaurant.name,
          isFavorite: true,
          isReserved: false,
          reserves: [],
        },
      ];
    });
  }
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Lecker Map</title>
      </Head>
      <Component
        {...pageProps}
        onReserve={handleReserve}
        userInfos={userInfos}
        reserveMessege={reserveMessege}
        onToggleBookmark={handleToggleBookmark}
      />
      <Footer />
    </>
  );
}
