import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-container">

        {/* Left Content */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-badge">
            Trusted Pharmacy in Chennai
          </span>

          <h1>
            Your Trusted
            <br />
            Healthcare Partner
            <span> for Every Family.</span>
          </h1>

          <p>
            Nagappa Medicals is committed to providing quality medicines,
            healthcare essentials, baby care products, personal care items,
            wellness solutions, and trusted pharmaceutical services for every
            family in K.K. Nagar.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary-custom">
              Explore Services
              <FaArrowRight />
            </button>

            <button className="btn-outline-custom">
              Contact Us
            </button>

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80"
            alt="Healthcare"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;