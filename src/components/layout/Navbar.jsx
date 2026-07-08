import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaClinicMedical, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="container navbar-wrapper">

        <NavLink
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <FaClinicMedical className="brand-icon" />

          <div>
            <h2>Nagappa Medicals</h2>
            <span>Trusted Healthcare</span>
          </div>
        </NavLink>

        <nav className={menuOpen ? "navigation active" : "navigation"}>

          <NavLink to="/" onClick={closeMenu}>Home</NavLink>

          <NavLink to="/about" onClick={closeMenu}>About</NavLink>

          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>

          <NavLink to="/health-products" onClick={closeMenu}>Products</NavLink>

          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <NavLink
            to="/medicine-enquiry"
            className="enquiry-button"
            onClick={closeMenu}
          >
            Medicine Enquiry
          </NavLink>

        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>
  );
}

export default Navbar;