import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import logo from "../../public/photo/logo.jpg";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: t("navbar.home") },
    { path: "/about", label: t("navbar.about") },
    { path: "/menu", label: t("navbar.menu") },
    { path: "/organization", label: t("navbar.organization") },
    { path: "/facilities", label: t("navbar.facilities") },
    { path: "/meals", label: t("navbar.meals") },
    { path: "/contact", label: t("navbar.contact") }
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="w-full px-4 mx-auto">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-16 w-auto transform transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#003B59] bg-blue-50'
                    : 'text-gray-600 hover:text-[#003B59] hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-2 px-4 py-2 text-sm font-medium text-[#003B59] border border-[#003B59] rounded-lg hover:bg-[#003B59] hover:text-white transition-all duration-300"
            >
              {i18n.language === 'tr' ? 'EN' : 'TR'}
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#003B59] hover:bg-blue-50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#003B59] bg-blue-50'
                      : 'text-gray-600 hover:text-[#003B59] hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="w-full text-left px-3 py-2 text-base font-medium text-[#003B59] hover:bg-blue-50 rounded-md transition-colors"
              >
                {i18n.language === 'tr' ? 'English' : 'Türkçe'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
