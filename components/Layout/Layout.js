import Heading from "../Heading/Heading";
import NavBar from "../NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Heading />
      <main>{children}</main>
      <footer>
        <NavBar />
      </footer>
    </>
  );
}
