import React from "react";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Hoş geldiniz, Admin!</h1>
        <p className="mt-2 text-gray-600">Sol menüden tesisleri yönetin veya içerikleri güncelleyin.</p>
      </main>
    </div>
  );
};

export default AdminDashboard;
