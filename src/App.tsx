import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default App;
