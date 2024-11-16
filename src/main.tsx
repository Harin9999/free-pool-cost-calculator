import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Lazy load the App component
const App = lazy(() => import('./App'));

// Clear any existing timers before mounting
const highestId = window.setTimeout(() => {}, 0);
for (let i = highestId; i >= 0; i--) {
  window.clearTimeout(i);
}

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-blue-600">Loading...</div>
    </div>
  }>
    <App />
  </Suspense>
);