import GlobalStyle from "../styles";
import Head from "next/head";
import Footer from "../components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Lecker Map</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
