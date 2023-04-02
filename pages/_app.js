import GlobalStyle from "../styles";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { useImmerLocalStorageState } from "../lib/useImmerLocalStorageState";
import { uid } from "uid";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [userInfos, updateUserInfos] = useImmerLocalStorageState(
    "lecker-map-user-info",
    {
      defaultValue: [],
    }
  );
  const [reserveMessege, setReservMessege] = useState("");

  function handleReserve(reserveData, id, timeslot) {
    // console.log("timeslot", timeslot);
    const { number_of_guests, name, email, phone } = reserveData;
    const info = userInfos.find((info) => info.id === id);
    updateUserInfos(() => {
      if (info) {
        return userInfos.map((info) =>
          info.id === id
            ? {
                id: id,
                isReserved: true,
                reserves: [
                  ...info.reserves,
                  {
                    reserveId: uid(),
                    name: name,
                    email: email,
                    number_of_guests: number_of_guests,
                    phone: phone,
                    timeslot: timeslot,
                  },
                ],
              }
            : info
        );
      }

      return [
        ...userInfos,
        {
          id: id,
          isReserved: true,
          reserves: [
            {
              reserveId: uid(),
              name: name,
              email: "",
              number_of_guests: number_of_guests,
              phone: phone,
              timeslot: timeslot,
            },
          ],
        },
      ];
    });
    setReservMessege(
      `Sie haben schon ${number_of_guests} ${
        number_of_guests == 1 ? "Seat" : "Seats"
      } um ${timeslot} erfolgreich reservert.`
    );
    /*  const newUserInfo = setReserv({ id: id, timeslot: timeslot, ...data });
    console.log(reserve); */
  }
  //console.log(userInfos);
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
/* 
{id: "1",
isFavorite: true;
isReserved: true;
reserves: [
  {email: "",
    name: "Jens Göldner",
    number_of_guests: "5",
    phone: "015255739365",
    timeslot: "2023-04-09 11:00 Uhr",
  },
]}; */
