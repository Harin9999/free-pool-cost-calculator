import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import AnalyticsProvider from './components/AnalyticsProvider';
import { lazyWithRetry } from './utils/lazyLoad';

// Lazy load components
const IngroundPool = lazyWithRetry(() => import('./pages/IngroundPool'));
const AboveGroundPool = lazyWithRetry(() => import('./pages/calculators/above-ground-pool'));
const EquipmentRepair = lazyWithRetry(() => import('./pages/calculators/equipment-repair'));
const SafetyFeatures = lazyWithRetry(() => import('./pages/calculators/safety-features'));
const MaintenanceGuide = lazyWithRetry(() => import('./pages/guides/maintenance'));
const SeasonalCare = lazyWithRetry(() => import('./pages/guides/seasonal-care'));
const MaintenanceAccessories = lazyWithRetry(() => import('./pages/accessories/maintenance'));
const Blog = lazyWithRetry(() => import('./pages/blog'));
const PoolTypes = lazyWithRetry(() => import('./pages/pool-types'));
const Privacy = lazyWithRetry(() => import('./pages/privacy'));
const Terms = lazyWithRetry(() => import('./pages/terms'));
const Contact = lazyWithRetry(() => import('./pages/contact'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-blue-600">Loading...</div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <AnalyticsProvider>
            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<IngroundPool />} />
                  <Route path="/calculators/above-ground-pool" element={<AboveGroundPool />} />
                  <Route path="/calculators/equipment-repair" element={<EquipmentRepair />} />
                  <Route path="/calculators/safety-features" element={<SafetyFeatures />} />
                  <Route path="/guides/maintenance" element={<MaintenanceGuide />} />
                  <Route path="/guides/seasonal-care" element={<SeasonalCare />} />
                  <Route path="/accessories/maintenance" element={<MaintenanceAccessories />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/pool-types" element={<PoolTypes />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </Layout>
          </AnalyticsProvider>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}