import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MedicineEnquiry from "./pages/MedicineEnquiry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/medicine-enquiry"
        element={<MedicineEnquiry />}
      />
    </Routes>
  );
}

export default App; 