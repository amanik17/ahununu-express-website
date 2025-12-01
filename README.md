# Ahununu Express Website

A modern, interactive website for Ahununu Express - Ethiopia's trusted express service provider.

## Features

- 🚚 **Modern Design**: Clean, green-themed UI with rounded corners
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Interactive**: Smooth animations and transitions
- 📦 **Package Tracking**: Real-time shipment tracking system
- 💰 **Instant Quotes**: AI-powered quote calculator
- 🎯 **Service Showcase**: Interactive accordion-style service descriptions
- 🏢 **Business Focus**: Designed for both commercial and individual customers

## Services Offered

- Road Freight
- Air Freight  
- Warehousing & Distribution
- Last-Mile Delivery
- Medical Express
- Bid & Contractual Logistics

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser to `http://localhost:3001`

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run dev` - Start dev server with auto-open

## Technology Stack

- **Frontend**: React 18 with Hooks
- **Styling**: CSS3 with CSS Variables
- **Animations**: Framer Motion
- **3D Effects**: Three.js with React Three Fiber
- **Build Tool**: Webpack 5
- **Package Manager**: npm

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Landing section
│   ├── Services.js     # Services with accordions
│   ├── Tracking.js     # Package tracking
│   ├── Quote.js        # Quote calculator
│   ├── About.js        # Company information
│   ├── Careers.js      # Job listings
│   ├── News.js         # News & FAQ
│   ├── Contact.js      # Contact form
│   ├── Partners.js     # Partner showcase
│   ├── Footer.js       # Site footer
│   └── VFXBackground.js # Animated background
├── styles/
│   └── App.css         # Main stylesheet
├── App.js              # Main application
└── index.js            # Entry point
```

## Design System

- **Primary Color**: #7fba42 (Ahununu Green)
- **Background**: #f8fafc (Light Gray)
- **Text**: #334155 (Dark Gray)
- **Font**: Inter (Google Fonts)
- **Border Radius**: 12px (standard), 16px (large)

## Demo Features

- Try tracking number: `AE123456789`
- Quote calculator with instant estimates
- Interactive service accordions
- Responsive navigation
- Smooth page transitions

## Contact

For questions about this website, contact the Ahununu Express development team.

---

© 2025 Ahununu Express. All rights reserved.

## Production Checklist

- Add brand assets to `public/`:
  - `public/icons/icon-192.png`
  - `public/icons/icon-512.png`
  - `public/favicon.ico`
  - `public/og-image.png`
- Create `.env` based on `.env.example` and set:
  - `REACT_APP_PUBLIC_SITE_URL=https://ahununu.com`
  - `REACT_APP_API_BASE_URL` (e.g., `/api` if using a reverse proxy)
  - `REACT_APP_SENTRY_DSN` (optional to enable Sentry)
  - `REACT_APP_ANALYTICS_DOMAIN=ahununu.com` (optional for Plausible)
- Build: `npm run build`
- Serve `dist/` behind your hosting with history fallback for SPA routing.
