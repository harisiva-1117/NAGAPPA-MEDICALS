import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import HealthProducts from "../pages/HealthProducts";
import Contact from "../pages/Contact";
import MedicineEnquiry from "../pages/MedicineEnquiry";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/health-products" element={<HealthProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medicine-enquiry" element={<MedicineEnquiry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;