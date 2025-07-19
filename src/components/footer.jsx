import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo2 from "../../public/photo/logo2.jpg";

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#003B59] text-white relative">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo ve Telif Hakkı */}
          <div className="flex items-center space-x-2">
            <img src={logo2} alt="Logo" className="h-16 w-auto" />
            <div className="text-sm">
              <p className="font-semibold">Alanya Belediyesi Sosyal Tesisleri</p>
              <p>© 2023 Tüm hakları saklıdır.</p>
            </div>
          </div>

          {/* Navigasyon Linkleri */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <Link
              to="/"
              className="hover:text-gray-300 whitespace-nowrap transition-colors"
            >
              Anasayfa
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300 whitespace-nowrap transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              to="/menu"
              className="hover:text-gray-300 whitespace-nowrap transition-colors"
            >
              Menü
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 whitespace-nowrap transition-colors"
            >
              İletişim
            </Link>
          </div>

          {/* İletişim Bilgileri */}
          <div className="text-center md:text-right text-sm">
            <p className="mb-1">İletişim: +90 242 513 10 67</p>
            <p>E-posta: info@alanya.bel.tr</p>
          </div>
        </div>

        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
