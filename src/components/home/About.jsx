import { motion } from "framer-motion";
import {
  FaClinicMedical,
  FaUserMd,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">About Nagappa Medicals</span>

          <h2>
            Trusted Healthcare Partner
            <span> For Every Family.</span>
          </h2>

          <p>
            Nagappa Medicals has been serving the people of K.K. Nagar,
            Chennai with genuine medicines, healthcare essentials,
            wellness products and pharmaceutical care.
          </p>

          <p>
            We believe healthcare should be accessible, affordable and
            reliable. Our experienced team is committed to helping every
            customer with the right medicines and health products.
          </p>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-card">
            <FaClinicMedical />
            <h3>Quality Medicines</h3>
            <p>100% Genuine Medicines From Trusted Brands.</p>
          </div>

          <div className="about-card">
            <FaUserMd />
            <h3>Expert Guidance</h3>
            <p>Professional Support For Better Healthcare.</p>
          </div>

          <div className="about-card">
            <FaHeartbeat />
            <h3>Health & Wellness</h3>
            <p>Complete Wellness Products For Every Age.</p>
          </div>

          <div className="about-card">
            <FaShieldAlt />
            <h3>Trusted Service</h3>
            <p>Serving Families With Care And Commitment.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;