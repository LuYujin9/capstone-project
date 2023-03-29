import NavBar from "../NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <footer>
        <NavBar />
      </footer>
    </>
  );
}
