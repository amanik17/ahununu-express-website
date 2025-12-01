import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      tracking: 'Track Shipment',
      quote: 'Get Quote',
      careers: 'Careers',
      news: 'News & Resources',
      contact: 'Contact'
    },
    actions: {
      language: 'Language',
      theme: 'Theme'
    }
  },
  am: {
    nav: {
      home: 'መነሻ',
      about: 'ስለ እኛ',
      services: 'አገልግሎቶች',
      tracking: 'መርከብ መከታተያ',
      quote: 'ግምት ያግኙ',
      careers: 'ሥራዎች',
      news: 'ዜና እና ሀብቶች',
      contact: 'አግኙን'
    },
    actions: {
      language: 'ቋንቋ',
      theme: 'ገጽታ'
    }
  }
};

const I18nContext = createContext({
  locale: 'en',
  t: (path) => path,
  setLocale: () => {}
});

export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('locale') : null;
    if (stored) setLocale(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('locale', locale);
  }, [locale]);

  const t = useMemo(() => {
    const dict = translations[locale] || translations.en;
    return (path, fallback) => {
      const parts = path.split('.');
      let node = dict;
      for (const p of parts) {
        node = node?.[p];
      }
      return node || fallback || path;
    };
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext); 