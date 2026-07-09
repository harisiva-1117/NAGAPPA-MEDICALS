import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-container">

        {/* Logo */}

        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <span>+</span>
          </div>

          <div className="logo-text">
            <h2>Nagappa Medicals</h2>
            <p>Trusted Healthcare Since 1998</p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/health-products" onClick={closeMenu}>
            Products
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            to="/medicine-enquiry"
            className="enquiry-btn mobile-btn"
            onClick={closeMenu}
          >
            Medicine Enquiry
          </Link>

        </nav>

        {/* Desktop Button */}

        <Link
          to="/medicine-enquiry"
          className="enquiry-btn desktop-btn"
        >
          Medicine Enquiry
        </Link>

        {/* Mobile Toggle */}

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;