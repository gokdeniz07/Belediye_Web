import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo2 from "../../public/photo/logo2.jpg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#003B59] text-white">
      <div className="w-full px-2 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <img src={logo2} alt="Logo" className="h-16 w-auto" />
            <div className="text-sm">
              <p className="font-semibold">Alanya Belediyesi Sosyal Tesisleri</p>
              <p>© 2023 Tüm hakları saklıdır.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <Link
              to="/"
              className="hover:text-gray-300 whitespace-nowrap"
            >
              Anasayfa
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300 whitespace-nowrap"
            >
              Hakkımızda
            </Link>
            <Link
              to="/menu"
              className="hover:text-gray-300 whitespace-nowrap"
            >
              Menü
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 whitespace-nowrap"
            >
              İletişim
            </Link>
          </div>

          <div className="text-center md:text-right text-sm">
            <p>İletişim: +90 242 513 10 67</p>
            <p>E-posta: info@alanya.bel.tr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
