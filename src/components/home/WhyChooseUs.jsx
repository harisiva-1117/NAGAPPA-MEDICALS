import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCapsules,
  FaTruck,
  FaUserMd,
  FaTags,
  FaClock,
} from "react-icons/fa";
import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "100% Genuine Medicines",
    description:
      "We provide authentic medicines sourced directly from trusted pharmaceutical companies.",
  },
  {
    icon: <FaCapsules />,
    title: "Wide Product Range",
    description:
      "Prescription medicines, OTC products, baby care, personal care and wellness essentials.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Service",
    description:
      "Quick medicine availability with prompt customer support and hassle-free service.",
  },
  {
    icon: <FaUserMd />,
    title: "Expert Guidance",
    description:
      "Friendly pharmacists helping you choose the right healthcare products.",
  },
  {
    icon: <FaTags />,
    title: "Affordable Prices",
    description:
      "Competitive prices on medicines and healthcare products without compromising quality.",
  },
  {
    icon: <FaClock />,
    title: "Trusted Healthcare Partner",
    description:
      "Serving families in K.K. Nagar with care, commitment and reliability.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why">
      <div className="container">

        <motion.div
          className="why-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">
            Why Choose Us
          </span>

          <h2>
            Why Thousands Trust
            <span> Nagappa Medicals</span>
          </h2>

          <p>
            We are committed to providing genuine medicines, exceptional
            customer service and quality healthcare products for every family.
          </p>
        </motion.div>

        <div className="why-grid">

          {features.map((item, index) => (
            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;