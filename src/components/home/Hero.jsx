import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* Left Content */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-tag">
            Trusted Pharmacy in Chennai
          </span>

          <h1>
            Caring For Your
            <span> Health</span>
            <br />
            Every Day.
          </h1>

          <p>
            Nagappa Medicals provides genuine medicines, healthcare essentials,
            wellness products, personal care, baby care, diabetic care,
            surgical items and expert pharmaceutical support for every family
            in K.K. Nagar, Chennai.
          </p>

          <div className="hero-buttons">

            <button className="hero-btn-primary">
              Explore Services
              <FaArrowRight />
            </button>

            <button className="hero-btn-outline">
              <FaPhoneAlt />
              Contact Us
            </button>

          </div>

          <div className="hero-features">

            <div>
              <span>✔</span>
              Quality Medicines
            </div>

            <div>
              <span>✔</span>
              Trusted Customer Service
            </div>

            <div>
              <span>✔</span>
              Health & Wellness Products
            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="image-card">

            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80"
              alt="Nagappa Medicals"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;