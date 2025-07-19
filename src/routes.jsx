// src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import Facilities from "./pages/facilities";
import FacilityDetail from "./pages/facilityDetail";
import Organization from "./pages/organization";
import OrganizationDetail from "./pages/organizationDetail";
import Yemekler from "./pages/yemekler";
import English from "./pages/english";

import AdminRoutes from "./routes/AdminRoutes";
import AdminLogin from "./admin/pages/AdminLogin";

function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/facilities/:id" element={<FacilityDetail />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/organization/:id" element={<OrganizationDetail />} />
          <Route path="/meals" element={<Yemekler />} />
          <Route path="/english" element={<English />} />
          
          {/* Admin rotaları */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default AppRoutes;
