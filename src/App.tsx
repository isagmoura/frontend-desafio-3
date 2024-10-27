import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App({ children }: React.PropsWithChildren) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default App;
