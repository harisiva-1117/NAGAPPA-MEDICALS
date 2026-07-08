import { FaCheckCircle } from "react-icons/fa";
import "./AboutPreview.css";

function AboutPreview() {
  return (
    <section className="about-preview">

      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-6">

            <div className="about-image">

              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                alt="Nagappa Medicals"
              />

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6">

            <span className="section-tag">
              About Nagappa Medicals
            </span>

            <h2>
              Caring for Your Health,
              <span> Every Day.</span>
            </h2>

            <p>
              Nagappa Medicals is committed to providing quality
              medicines, healthcare essentials, wellness products,
              baby care, personal care, and trusted pharmaceutical
              services for families in K.K. Nagar, Chennai.
            </p>

            <div className="about-features">

              <div className="feature-item">
                <FaCheckCircle />
                <span>Quality Medicines</span>
              </div>

              <div className="feature-item">
                <FaCheckCircle />
                <span>Trusted Customer Service</span>
              </div>

              <div className="feature-item">
                <FaCheckCircle />
                <span>Health & Wellness Products</span>
              </div>

            </div>

            <button className="about-btn">
              Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;