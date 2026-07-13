import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import HealthProducts from "../components/home/HealthProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import GoogleMap from "../components/home/GoogleMap";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

import FloatingButtons from "../components/common/FloatingButtons";
import ScrollToTop from "../components/common/ScrollToTop";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <HealthProducts />

      <WhyChooseUs />

      <Testimonials />

      <GoogleMap />

      <Contact />

      <Footer />

      <FloatingButtons />

      <ScrollToTop />
    </>
  );
}

export default Home;