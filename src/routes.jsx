import { Routes, Route } from "react-router-dom";
import Menu from "./pages/menu";
import Home from "./pages/home";
import About from "./pages/about";
import Facilities from "./pages/facilities";
import FacilityDetail from "./pages/facilityDetail";
import Meals from "./pages/yemekler";
import Organization from "./pages/organization";
import OrganizationDetail from "./pages/organizationDetail";
import Contact from "./pages/contact";
// Eğer English vs. varsa
import English from "./pages/english"; // varsa
import { useTranslation } from "react-i18next";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/facility/:id" element={<FacilityDetail />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/organization/:id" element={<OrganizationDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/english" element={<English />} /> {/* varsa */}
    </Routes>
  );
};

export default AppRoutes;