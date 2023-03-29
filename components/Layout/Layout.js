import NavBar from "../NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <footer>
        <NavBar />
      </footer>
    </>
  );
}
