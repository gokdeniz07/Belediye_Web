import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <header className="bg-[#003B59] text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 relative h-28">
        <div className="flex items-center justify-between h-full">
          {/* Desktop Menü */}
          <nav className="hidden md:flex items-center justify-between w-full">
            {/* Sol Menü */}
            <div className="flex items-center space-x-8 min-w-[400px]">
              <Link to="/" className="text-lg font-semibold whitespace-nowrap w-24 text-center hover:text-yellow-300 transition-colors">{t("navbar.home")}</Link>
              <Link to="/about" className="text-lg font-semibold whitespace-nowrap w-24 text-center hover:text-yellow-300 transition-colors">{t("navbar.about")}</Link>
              <Link to="/facilities" className="text-lg font-semibold whitespace-nowrap w-24 text-center hover:text-yellow-300 transition-colors">{t("navbar.facilities")}</Link>
              <Link to="/meals" className="text-lg font-semibold whitespace-nowrap w-24 text-center hover:text-yellow-300 transition-colors">{t("navbar.meals")}</Link>
            </div>

            {/* Logo */}
            <div className="mx-4 flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-yellow-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                <img
                  src="/photo/logo.jpg"
                  alt="Logo"
                  className="h-20 w-20 object-contain relative z-10 p-1 rounded-full transform group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-300/30 group-hover:border-yellow-300/50 transition-colors duration-300"></div>
              </div>
            </div>

            {/* Sağ Menü */}
            <div className="flex items-center space-x-8 min-w-[400px] justify-end">
              <Link to="/menu" className="text-lg font-semibold whitespace-nowrap w-24 text-center hover:text-yellow-300 transition-colors">{t("navbar.menu")}</Link>
              <Link to="/organization" className="text-lg font-semibold whitespace-nowrap w-48 text-center hover:text-yellow-300 transition-colors">{t("navbar.organization")}</Link>
              <Link to="/contact" className="text-lg font-semibold whitespace-nowrap w-32 text-center hover:text-yellow-300 transition-colors">{t("navbar.contact")}</Link>
            </div>
          </nav>

          {/* Dil Seçici - Desktop */}
          <div className="hidden md:block relative ml-6">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 text-base font-medium hover:text-yellow-300 transition-colors"
            >
              <Globe size={20} />
              <span>{i18n.language === 'tr' ? 'Türkçe' : 'English'}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg overflow-hidden z-50">
                <button
                  onClick={() => handleLangChange("tr")}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-200 transition ${i18n.language === 'tr' ? 'bg-gray-100' : ''}`}
                >
                  Türkçe
                </button>
                <button
                  onClick={() => handleLangChange("en")}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-200 transition ${i18n.language === 'en' ? 'bg-gray-100' : ''}`}
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button className="md:hidden z-20" onClick={toggleMenu}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <div className="md:hidden bg-[#003B59] px-6 pb-4 flex flex-col gap-4 text-[16px] font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>{t("navbar.home")}</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>{t("navbar.about")}</Link>
          <Link to="/facilities" onClick={() => setIsOpen(false)}>{t("navbar.facilities")}</Link>
          <Link to="/meals" onClick={() => setIsOpen(false)}>{t("navbar.meals")}</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)}>{t("navbar.menu")}</Link>
          <Link to="/organization" onClick={() => setIsOpen(false)}>{t("navbar.organization")}</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>{t("navbar.contact")}</Link>

          {/* Mobil Dil Seçici */}
          <div className="flex gap-4 mt-2 justify-center">
            <button 
              onClick={() => handleLangChange("tr")} 
              className={`flex items-center gap-1 px-3 py-1 rounded-md ${i18n.language === 'tr' ? 'bg-white/10' : ''}`}
            >
              <span>🇹🇷</span>
              <span className={`${i18n.language === 'tr' ? 'underline' : ''}`}>Türkçe</span>
            </button>
            <button 
              onClick={() => handleLangChange("en")} 
              className={`flex items-center gap-1 px-3 py-1 rounded-md ${i18n.language === 'en' ? 'bg-white/10' : ''}`}
            >
              <span>🇬🇧</span>
              <span className={`${i18n.language === 'en' ? 'underline' : ''}`}>English</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
