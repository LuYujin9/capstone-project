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
    const info = userInfos.find((info) => info.id === restaurant.id);
    updateUserInfos(() => {
      if (info) {
        return userInfos.map((info) =>
          info.id === restaurant.id
            ? {
                id: restaurant.id,
                name_of_restaurant: restaurant.name,
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

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Lecker Map</title>
      </Head>
      <Component
        {...pageProps}
        handleReserve={handleReserve}
        userInfos={userInfos}
        reserveMessege={reserveMessege}
      />
      <Footer />
    </>
  );
}
