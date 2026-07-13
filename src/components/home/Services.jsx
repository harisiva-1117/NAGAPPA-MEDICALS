import { motion } from "framer-motion";
import {
  FaCapsules,
  FaHeartbeat,
  FaBaby,
  FaPumpSoap,
  FaNotesMedical,
  FaBriefcaseMedical,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaCapsules />,
    title: "Prescription Medicines",
    description:
      "Genuine prescription medicines from trusted pharmaceutical brands.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health & Wellness",
    description:
      "Nutrition, vitamins, immunity boosters and wellness essentials.",
  },
  {
    icon: <FaBaby />,
    title: "Baby Care",
    description:
      "Baby food, diapers, skincare and healthcare products.",
  },
  {
    icon: <FaPumpSoap />,
    title: "Personal Care",
    description:
      "Daily hygiene, skincare, haircare and grooming essentials.",
  },
  {
    icon: <FaNotesMedical />,
    title: "OTC Medicines",
    description:
      "Over-the-counter medicines for common health concerns.",
  },
  {
    icon: <FaBriefcaseMedical />,
    title: "Medical Equipment",
    description:
      "BP monitors, glucometers, thermometers and healthcare devices.",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-container">

        <motion.div
          className="services-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-tag">
            Our Services
          </span>

          <h2>
            Complete Healthcare
            <span> Solutions</span>
          </h2>

          <p>
            We provide comprehensive pharmaceutical services and healthcare
            products to support your family's wellbeing.
          </p>

        </motion.div>

        <div className="services-grid">

          {services.map((service, index) => (

            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;