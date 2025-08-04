import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Language } from "../types";
import logoImage from "../img/logo1.png";

interface NavTranslations {
  nav: Record<
    | "about"
    | "services"
    | "pricing"
    | "inspection"
    | "gallery"
    | "contact",
    string
  >;
}

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  t: NavTranslations;
}

const navItems = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "inspection", href: "#inspection" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#contact" },
];

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Blokada scrolla przy otwartym menu mobilnym
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Obsługa zmiany języka z zamknięciem menu
  const handleLanguageChange = (lang: Language) => {
    onLanguageChange(lang);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-2xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img
              src={logoImage}
              alt="Logo WICAR"
              width={160}
              className="h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                role="menuitem"
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 relative group"
              >
                {t.nav[item.key]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden bg-gray-900 border-t border-gray-800"
            role="menu"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  role="menuitem"
                  className="block text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav[item.key]}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <LanguageSwitcher
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
