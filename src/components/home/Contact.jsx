import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-tag">
            Contact Us
          </span>

          <h2>
            We're Always Here
            <span> To Help You</span>
          </h2>

          <p>
            Visit Nagappa Medicals for genuine medicines, healthcare products,
            and trusted pharmaceutical services. Our team is ready to assist
            you with all your healthcare needs.
          </p>

          <div className="contact-info">

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Address</h4>
                <p>
                  Shop No. 8, Amman Kovil Complex,
                  100A/1 Ponnambalam Salai,
                  K.K. Nagar,
                  Chennai - 600078
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <p>+91 98413 26485</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>nagappamedicals@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaClock />
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Sunday : 7:00 AM - 10:00 PM</p>
              </div>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              rows="6"
              placeholder="Write Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;