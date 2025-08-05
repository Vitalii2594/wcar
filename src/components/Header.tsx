import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Language } from "../types";

interface NavTranslations {
  nav: Record<
    "about" | "services" | "pricing" | "inspection" | "gallery" | "contact",
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

  // Blokada scrolla dodając/usuając klasę na body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const handleLanguageChange = (lang: Language) => {
    onLanguageChange(lang);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-2xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" aria-label="Strona główna ClikDrive">
              <img
                src="/logo1.webp"
                alt="ClikDrive – partner WICAR, samochody używane z gwarancją"
                loading="eager"
                width={160}
                height={80}
                className="h-auto w-40"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                role="menuitem"
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 relative group"
                aria-label={t.nav[item.key]}
              >
                {t.nav[item.key]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Language Switcher (desktop) */}
          <div className="hidden md:block">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Zamknij menu nawigacyjne" : "Otwórz menu nawigacyjne"}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-menu"
          className={`md:hidden bg-gray-900 border-t border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                role="menuitem"
                className="block text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                aria-label={t.nav[item.key]}
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
