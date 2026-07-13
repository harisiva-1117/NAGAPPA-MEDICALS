import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "K.K. Nagar",
    review:
      "Nagappa Medicals has always been our family's trusted pharmacy. Genuine medicines and excellent customer service every time.",
  },
  {
    name: "Priya S",
    location: "Ashok Nagar",
    review:
      "Very friendly staff and affordable prices. They always help me find the medicines I need quickly.",
  },
  {
    name: "Suresh Babu",
    location: "Vadapalani",
    review:
      "Highly recommended. Wide range of healthcare products with professional guidance and prompt service.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <motion.div
          className="testimonial-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            Customer Reviews
          </span>

          <h2>
            What Our
            <span> Customers Say</span>
          </h2>

          <p>
            The trust and satisfaction of our customers inspire us to
            deliver better healthcare services every day.
          </p>

        </motion.div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <motion.div
              className="testimonial-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <FaQuoteLeft className="quote-icon" />

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="review">
                {item.review}
              </p>

              <h3>{item.name}</h3>

              <span>{item.location}</span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;