import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Menu />
        <Reservation />
        <Contact />
        <Support />
      </main>

      <Footer />
    </>
  );
}

export default App;