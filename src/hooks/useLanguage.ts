import { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pl');

  const t = translations[currentLanguage];

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return {
    currentLanguage,
    changeLanguage,
    t
  };
};