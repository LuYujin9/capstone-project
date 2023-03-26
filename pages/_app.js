import GlobalStyle from "../styles";
import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
      <footer>
        <NavBar />
      </footer>
    </>
  );
}
