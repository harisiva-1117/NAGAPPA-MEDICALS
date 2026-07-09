import { motion } from "framer-motion";
import {
  FaCapsules,
  FaHeartbeat,
  FaBaby,
  FaPumpSoap,
  FaNotesMedical,
  FaFirstAid,
} from "react-icons/fa";
import "./HealthProducts.css";

const products = [
  {
    icon: <FaCapsules />,
    title: "Prescription Medicines",
    description:
      "Quality prescription medicines from trusted pharmaceutical companies.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health Supplements",
    description:
      "Vitamins, minerals and nutritional supplements for everyday wellness.",
  },
  {
    icon: <FaBaby />,
    title: "Baby Care Products",
    description:
      "Baby food, diapers, lotions, powders and infant healthcare products.",
  },
  {
    icon: <FaPumpSoap />,
    title: "Personal Care",
    description:
      "Skincare, haircare, hygiene and daily personal care essentials.",
  },
  {
    icon: <FaNotesMedical />,
    title: "Medical Devices",
    description:
      "BP monitors, thermometers, glucometers and health monitoring devices.",
  },
  {
    icon: <FaFirstAid />,
    title: "First Aid Essentials",
    description:
      "Bandages, antiseptics, dressings and emergency healthcare products.",
  },
];

function HealthProducts() {
  return (
    <section className="products">

      <div className="products-container">

        <motion.div
          className="products-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="section-tag">
            Health Products
          </span>

          <h2>
            Complete Healthcare
            <span> Product Range</span>
          </h2>

          <p>
            Discover a wide range of genuine healthcare products
            carefully selected to support your family's health.
          </p>

        </motion.div>

        <div className="products-grid">

          {products.map((product, index) => (

            <motion.div
              className="product-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              <div className="product-icon">
                {product.icon}
              </div>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HealthProducts;