import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { useI18n } from '../i18n';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();
  
  // Set light theme on component mount
  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('dark');
  }, []);

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/tracking', label: t('nav.tracking') },
    { to: '/quote', label: t('nav.quote') },
    { to: '/careers', label: t('nav.careers') },
    { to: '/news', label: t('nav.news') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="logo">
            <img src="/assets/logo.png" alt="Ahununu Express Logo" style={{ height: '40px', marginRight: '10px' }} />
            Ahununu Express
          </Link>
        </motion.div>

        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <select
            aria-label={t('actions.language')}
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="select select-bordered select-sm max-w-xs"
          >
            <option value="en">English</option>
            <option value="am">Amharic</option>
          </select>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            padding: '1rem',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #f1f5f9',
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
