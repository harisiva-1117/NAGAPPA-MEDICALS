import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-container">

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <div className="logo-icon">
            +
          </div>

          <div className="logo-text">
            <h2>Nagappa Medicals</h2>
            <p>Trusted Healthcare Partner</p>
          </div>
        </Link>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#products" onClick={closeMenu}>
            Products
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <Link
            to="/medicine-enquiry"
            className="enquiry-btn mobile-btn"
            onClick={closeMenu}
          >
            Medicine Enquiry
          </Link>

        </nav>

        <Link
          to="/medicine-enquiry"
          className="enquiry-btn desktop-btn"
        >
          Medicine Enquiry
        </Link>

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