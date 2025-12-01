const CONSENT_KEY = 'analytics_consent';

export function getConsent() {
  if (typeof window === 'undefined') return false;
  const v = localStorage.getItem(CONSENT_KEY);
  return v === 'granted';
}

export function setConsent(granted) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
  if (granted) {
    loadAnalytics();
  }
}

export function loadAnalytics() {
  if (typeof window === 'undefined') return;
  if (window.__analyticsLoaded) return;
  const domain = process.env.REACT_APP_ANALYTICS_DOMAIN;
  if (!domain) return; // Do not load if not configured
  window.__analyticsLoaded = true;
  const s = document.createElement('script');
  s.defer = true;
  // Example: Plausible. Use configured domain
  s.setAttribute('data-domain', domain);
  s.src = 'https://plausible.io/js/script.js';
  document.head.appendChild(s);
}

export function initAnalytics() {
  if (getConsent()) {
    loadAnalytics();
  }
}