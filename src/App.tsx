import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Benefits from "./components/Benefits/Benefits";
import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* categories */}
        {/* products */}
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

export default App;
