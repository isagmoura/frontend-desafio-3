import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {
  const [page, setPage] = useState<"home" | "shop" | "details">("home");

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: 2,
          position: "absolute",
          top: 0,
        }}
      >
        <button onClick={() => setPage("home")}>home</button>
        <button onClick={() => setPage("shop")}>shop</button>
        <button onClick={() => setPage("details")}>details</button>
      </div>
      <Header />
      <main>
        {page === "home" ? (
          <Home />
        ) : page === "shop" ? (
          <Shop />
        ) : (
          <>details page</>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
