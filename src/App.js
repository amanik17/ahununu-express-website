import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Services = React.lazy(() => import('./components/Services'));
const Tracking = React.lazy(() => import('./components/Tracking'));
const Quote = React.lazy(() => import('./components/Quote'));
const Careers = React.lazy(() => import('./components/Careers'));
const News = React.lazy(() => import('./components/News'));
const Contact = React.lazy(() => import('./components/Contact'));
const Partners = React.lazy(() => import('./components/Partners'));
const WarehousePage = React.lazy(() => import('./pages/WarehousePage'));
import Footer from './components/Footer';
import './styles/App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import NotFound from './components/NotFound';
import StructuredData from './components/StructuredData';

const VFXBackground = React.lazy(() => import('./components/VFXBackground'));

const PageTransition = ({ children, routeKey }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={routeKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loading-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Ahununu Express</h1>
          <Spinner size={36} />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
        <ErrorBoundary>
          <Suspense fallback={<div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }} />}>
            <VFXBackground />
          </Suspense>
          <Header />
          <StructuredData />
          
          <main className="main-content">
            <PageTransition routeKey={location.pathname}>
              <Suspense fallback={<div style={{ display: 'grid', placeItems: 'center', minHeight: '40vh' }}><Spinner size={40} /></div>}>
                <Routes location={location}>
                  <Route path="/" element={<Hero />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/tracking" element={<Tracking />} />
                  <Route path="/quote" element={<Quote />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/warehouse" element={<WarehousePage />} />
                  <Route path="/home" element={<Navigate to="/" replace />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </PageTransition>
          </main>

          <Footer />
        </ErrorBoundary>
      </div>
  );
};

export default App;
