import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  const languages = [
    { code: 'pl' as Language, name: 'PL', flag: '🇵🇱' },
    { code: 'uk' as Language, name: 'UA', flag: '🇺🇦' },
    { code: 'ru' as Language, name: 'RU', flag: '🇷🇺' }
  ];

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLanguage === lang.code
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;