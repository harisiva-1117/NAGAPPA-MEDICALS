import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={visible ? "scroll-top active" : "scroll-top"}
      onClick={scrollTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;