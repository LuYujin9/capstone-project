import GlobalStyle from "../styles";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

//there is still a "go back button" in HomePage, remove it in the user story of homepage.
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Lecker Map</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
