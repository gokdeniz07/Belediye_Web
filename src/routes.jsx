import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import Organization from "./pages/organization";
import OrganizationDetail from "./pages/organizationDetail";
import Facilities from "./pages/facilities";
import FacilityDetail from "./pages/facilityDetail";
import Yemekler from "./pages/yemekler";
import English from "./pages/english";

function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/organization/:id" element={<OrganizationDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/facilities/:id" element={<FacilityDetail />} />
          <Route path="/meals" element={<Yemekler />} />
          <Route path="/english" element={<English />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default AppRoutes;