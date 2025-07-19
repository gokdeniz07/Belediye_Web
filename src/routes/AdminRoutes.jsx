import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../admin/pages/AdminDashboard";
import FacilityManager from "../admin/pages/FacilityManager";
import AdminHome from "../admin/pages/AdminHome";
import AdminAbout from "../admin/pages/AdminAbout";
import Login from "../admin/pages/Login";
import RequireAuth from "../admin/components/RequireAuth";
import AuthGuard from "../admin/components/AuthGuard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="dashboard"
        element={
          <AuthGuard>
            <AdminDashboard />
          </AuthGuard>
        }
      />
      <Route
        path="facilities"
        element={
          <AuthGuard>
            <FacilityManager />
          </AuthGuard>
        }
      />
      <Route
        path="home"
        element={
          <AuthGuard>
            <AdminHome />
          </AuthGuard>
        }
      />
      <Route
        path="about"
        element={
          <AuthGuard>
            <AdminAbout />
          </AuthGuard>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
