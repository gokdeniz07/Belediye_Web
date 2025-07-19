import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-100 p-6 border-r">
      <h2 className="text-xl font-bold mb-6">Admin Paneli</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/admin/dashboard" className="hover:underline">Panel Anasayfa</Link>
        <Link to="/admin/facilities" className="hover:underline">Tesis Yönetimi</Link>
        <Link to="/admin/organizations" className="hover:underline">Organizasyonlar</Link>
        <Link to="/admin/menus" className="hover:underline">Menüler</Link>
        <Link to="/admin/meals" className="hover:underline">Yemekler</Link>
        <hr className="my-4 border-gray-400" />
        <Link to="/admin/home" className="hover:underline">Anasayfa İçeriği</Link>
        <Link to="/admin/about" className="hover:underline">Hakkımızda İçeriği</Link>
        <Link to="/admin/contact" className="hover:underline">İletişim Bilgileri</Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
