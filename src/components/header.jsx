import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react"; // Globe ikonu için

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
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between relative h-28">

        {/* Sol Menü (Desktop) */}
        <div className="hidden md:flex gap-12 text-[20px] font-semibold">
          <Link to="/">{t("navbar.home")}</Link>
          <Link to="/about">{t("navbar.about")}</Link>
          <Link to="/facilities">{t("navbar.facilities")}</Link>
          <Link to="/meals">{t("navbar.meals")}</Link>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="/photo/logo.jpg"
            alt="Logo"
            className="h-20 w-auto object-contain bg-white p-1 rounded-[50%] border border-white shadow-md"
          />
        </div>

        {/* Sağ Menü (Desktop) */}
        <div className="hidden md:flex gap-10 text-[20px] font-semibold items-center">
          <Link to="/menu">{t("navbar.menu")}</Link>
          <Link to="/organization">{t("navbar.organization")}</Link>
          <Link to="/contact">{t("navbar.contact")}</Link>

          {/* Havalı Dil Seçici */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 text-[16px] font-medium hover:text-yellow-300 transition"
            >
              <Globe size={20} />
              <span className="underline">{i18n.language === 'tr' ? 'Türkçe' : 'English'}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg overflow-hidden z-50 animate-fade-in">
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
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button className="md:hidden ml-auto z-20" onClick={toggleMenu}>
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
