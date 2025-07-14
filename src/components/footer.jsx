import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003B59] text-white pt-4 pb-1 mt-0">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-start">
        {/* Logo ve Adres */}
        <div className="flex flex-col items-center text-center md:items-center md:text-center">
          <img
            src="/photo/logo2.jpg"
            alt="Logo"
            className="h-16 w-16 object-contain mb-3 rounded-full border bg-white p-1"
          />
          <p className="text-sm flex items-center gap-2">
            <FaMapMarkerAlt /> Alanya Belediyesi, Antalya
          </p>
        </div>

        {/* İletişim */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-2">İletişim</h3>
          <p className="text-sm flex items-center gap-2">
            <FaPhone /> +90 242 123 45 67
          </p>
          <p className="text-sm mt-3">info@alanya.bel.tr</p>
        </div>

        {/* Sosyal Medya */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-2">Bizi Takip Edin</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/alanyabelediyesi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/alanyabldsosyaltesisleri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/ALANYABLD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-1 text-xs text-gray-300 text-center px-5">
      © {new Date().getFullYear()} Alanya Belediyesi. Tüm hakları saklıdır.
      </div>

    </footer>
  );
};

export default Footer;
