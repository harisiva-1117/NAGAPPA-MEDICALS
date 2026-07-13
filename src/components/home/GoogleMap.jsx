import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import "./GoogleMap.css";

function GoogleMap() {
  return (
    <section className="google-map">

      <div className="container">

        <motion.div
          className="map-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            Visit Our Store
          </span>

          <h2>
            Find
            <span> Nagappa Medicals</span>
          </h2>

          <p>
            Conveniently located in K.K. Nagar, Chennai.
            Visit us for genuine medicines and healthcare products.
          </p>

        </motion.div>

        <div className="map-wrapper">

          <div className="map-frame">

            <iframe
              title="Nagappa Medicals Location"
              src="https://www.google.com/maps?q=Nagappa+Medicals,+Ponnambalam+Salai,+KK+Nagar,+Chennai&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

          <div className="map-info">

            <div className="info-card">

              <FaMapMarkerAlt />

              <div>
                <h3>Address</h3>

                <p>
                  Shop No.8,
                  Amman Kovil Complex,
                  100A/1 Ponnambalam Salai,
                  K.K. Nagar,
                  Chennai - 600078
                </p>

              </div>

            </div>

            <div className="info-card">

              <FaPhoneAlt />

              <div>
                <h3>Phone</h3>

                <p>+91 98413 26485</p>

              </div>

            </div>

            <div className="info-card">

              <FaClock />

              <div>
                <h3>Working Hours</h3>

                <p>
                  Monday - Sunday
                  <br />
                  7:00 AM - 10:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GoogleMap;