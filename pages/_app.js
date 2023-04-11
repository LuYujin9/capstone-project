import GlobalStyle from "../styles";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((response) => response.json());
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Lecker Map</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
        <Footer />
      </SWRConfig>
    </>
  );
}
