import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeAnalytics, trackPageView } from '../utils/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

// Polyfill for requestIdleCallback
const requestIdleCallback = 
  window.requestIdleCallback ||
  function(cb: IdleRequestCallback) {
    return setTimeout(() => {
      const start = Date.now();
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
      });
    }, 1);
  };

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Defer analytics initialization
    const initAnalytics = () => {
      requestIdleCallback(() => {
        initializeAnalytics();
      });
    };

    if (document.readyState === 'complete') {
      initAnalytics();
    } else {
      window.addEventListener('load', initAnalytics);
      return () => window.removeEventListener('load', initAnalytics);
    }
  }, []);

  useEffect(() => {
    // Defer page view tracking
    requestIdleCallback(() => {
      trackPageView(location.pathname + location.search);
    });
  }, [location]);

  return <>{children}</>;
};

export default AnalyticsProvider;