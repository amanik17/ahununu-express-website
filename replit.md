# Ahununu Express Website

## Overview

Ahununu Express is a React-based website for Ethiopia's express delivery and logistics service provider. The application features package tracking, instant quote calculations, service showcases, and contact functionality. It includes 3D visualizations using Three.js, animations via Framer Motion, and supports internationalization (English/Amharic).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with functional components and hooks
- **React Router v6** for client-side routing with lazy-loaded pages
- **Framer Motion** for page transitions and UI animations

### 3D Graphics
- **Three.js** with **@react-three/fiber** and **@react-three/drei** for 3D scenes
- Used in hero sections, service showcases, and warehouse visualization
- Physics support via **@react-three/cannon**

### State Management
- React's built-in useState/useEffect hooks
- Context API for internationalization (i18n)
- No external state management library

### Styling Approach
- CSS with CSS Variables for theming (light/dark mode support)
- Mobile-first responsive design with CSS clamp() functions
- Component-scoped styles in `/src/styles/`

### Build System
- **Webpack 5** with Babel for transpilation
- Code splitting via dynamic imports and React.lazy()
- Service worker (Workbox) for PWA capabilities and offline caching

### Error Handling
- **Sentry** integration for error tracking (optional, requires DSN)
- React ErrorBoundary component for graceful error UI

### Testing
- Jest with React Testing Library
- Tests located in `__tests__/` directory

### API Layer
- Axios-based HTTP client in `/src/services/`
- Tracking and quote APIs with mock fallback data
- Environment-based API URL configuration

## External Dependencies

### Required Environment Variables
- `REACT_APP_API_BASE_URL` - Backend API endpoint (defaults to `/api`)
- `REACT_APP_SENTRY_DSN` - Sentry error tracking (optional)
- `REACT_APP_ANALYTICS_DOMAIN` - Plausible analytics domain (optional)

### Backend API Requirements
The frontend expects these REST endpoints:
- `GET /api/tracking/:trackingNumber` - Package tracking status
- `POST /api/quotes/calculate` - Quote calculation
- `POST /api/quotes` - Quote submission
- `POST /api/contact` - Contact form submission

### Third-Party Services
- **Sentry** - Error monitoring and performance tracing
- **Plausible** - Privacy-friendly analytics (consent-based)
- **Google Fonts** - Inter font family

### PWA Features
- Service worker for caching (Workbox)
- Web app manifest at `/public/manifest.json`
- Offline support for static assets and API responses