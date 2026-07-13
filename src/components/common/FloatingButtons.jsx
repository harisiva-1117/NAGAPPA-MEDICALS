import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./FloatingButtons.css";

function FloatingButtons() {
  return (
    <>
      <a
        href="tel:+91XXXXXXXXXX"
        className="floating-call"
        aria-label="Call Nagappa Medicals"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp Nagappa Medicals"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default FloatingButtons;