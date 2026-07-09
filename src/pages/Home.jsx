import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import HealthProducts from "../components/home/HealthProducts";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HealthProducts />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;