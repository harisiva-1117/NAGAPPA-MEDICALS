import { useState } from "react";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaWhatsapp,
  FaUpload,
} from "react-icons/fa";
import "./MedicineEnquiry.css";

function MedicineEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    medicine: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
*Medicine Enquiry*

Name: ${formData.name}

Phone: ${formData.phone}

Medicine: ${formData.medicine}

Message: ${formData.message}
`;

    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <section className="medicine-page">

      <div className="container">

        <div className="medicine-header">

          <span className="section-tag">
            Medicine Enquiry
          </span>

          <h2>
            Can't Find Your
            <span> Medicine?</span>
          </h2>

          <p>
            Fill in the details below and our team will
            get back to you as soon as possible.
          </p>

        </div>

        <div className="medicine-wrapper">

          <form
            className="medicine-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="medicine"
              placeholder="Medicine Name"
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Additional Details"
              onChange={handleChange}
            ></textarea>

            <label className="upload-box">

              <FaUpload />

              Upload Prescription

              <input
                type="file"
                hidden
              />

            </label>

            <button type="submit">

              <FaPaperPlane />

              Send Enquiry

            </button>

          </form>

          <div className="medicine-info">

            <div className="info-box">

              <FaWhatsapp />

              <h3>WhatsApp</h3>

              <p>
                Send your medicine enquiry directly on WhatsApp.
              </p>

            </div>

            <div className="info-box">

              <FaPhoneAlt />

              <h3>Call Us</h3>

              <p>
                Speak directly with our pharmacy team.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MedicineEnquiry;