import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>Nagappa Medicals</h2>

          <p>
            Your trusted healthcare partner in K.K. Nagar, Chennai.
            Providing genuine medicines, healthcare products and
            wellness solutions with care and commitment.
          </p>

          <div className="footer-social">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>

        </div>

        <div className="footer-services">

          <h3>Services</h3>

          <a href="#">Prescription Medicines</a>
          <a href="#">Health Products</a>
          <a href="#">Baby Care</a>
          <a href="#">Personal Care</a>
          <a href="#">Medical Equipment</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <div className="footer-item">
            <FaPhoneAlt />
            <span>+91 XXXXX XXXXX</span>
          </div>

          <div className="footer-item">
            <FaEnvelope />
            <span>nagappamedicals@gmail.com</span>
          </div>

          <div className="footer-item">
            <FaMapMarkerAlt />
            <span>
              Shop No.8, Amman Kovil Complex,
              Ponnambalam Salai,
              K.K. Nagar,
              Chennai - 600078
            </span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Nagappa Medicals. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;