import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Benefits from "./components/Benefits/Benefits";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

export default App;
