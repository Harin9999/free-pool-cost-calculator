import { useState, lazy, Suspense } from 'react';
import { Calculator, RefreshCw } from 'lucide-react';
import SEO from '../components/SEO';
import PoolForm from '../components/PoolForm';
import Results from '../components/Results';
import { calculatePoolCost } from '../utils/calculations';

// Lazy load FAQ component
const FAQ = lazy(() => import('../components/FAQ'));

interface CostEstimate {
  totalCost: number;
  breakdown: {
    baseCost: number;
    featuresCost: number;
    laborCost: number;
    permitsCost: number;
    yearlyMaintenance: number;
  };
}

const initialFormData = {
  poolType: 'concrete',
  dimensions: {
    length: 0,
    width: 0,
    depth: 0,
  },
  features: [] as string[],
  equipment: [] as string[],
  safetyFeatures: [] as string[],
};

export default function IngroundPool() {
  const [cost, setCost] = useState<CostEstimate | null>(null);
  const [formData, setFormData] = useState(initialFormData);

  const handleCalculate = (data: typeof initialFormData) => {
    setFormData(data);
    const estimate = calculatePoolCost({
      length: data.dimensions.length,
      width: data.dimensions.width,
      depth: data.dimensions.depth,
      type: data.poolType,
      features: data.features
    });
    setCost(estimate);
  };

  const handleReset = () => {
    setCost(null);
    setFormData(initialFormData);
  };

  return (
    <>
      <SEO 
        title="Free Pool Cost Calculator - Estimate Your Pool Expenses"
        description="Calculate the cost of your dream pool instantly with our free calculator. Get accurate estimates for inground pools, equipment, and maintenance costs. Updated prices for 2024."
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free Pool Cost Calculator",
          "description": "Calculate pool construction and maintenance costs instantly with our free calculator.",
          "url": "https://www.freepoolcostcalculator.com",
          "applicationCategory": "Calculator",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Free Pool Cost Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant, accurate estimates for your dream pool project. Updated pricing for 2024.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Calculate Pool Cost</h2>
            </div>
            <PoolForm onCalculate={handleCalculate} formData={formData} />
            {cost && (
              <button
                onClick={handleReset}
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Reset Calculator
              </button>
            )}
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
            <Results cost={cost} />
          </div>
        </div>

        <Suspense fallback={<div className="mt-16 h-32 animate-pulse bg-gray-100 rounded-xl" />}>
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Frequently Asked Questions About Pool Costs
            </h2>
            <FAQ />
          </section>
        </Suspense>

        <section className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Our Pool Cost Calculator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4" role="img" aria-label="Target icon">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accurate Estimates</h3>
              <p className="text-gray-600">Real-time pricing data updated for 2024</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4" role="img" aria-label="Lightning icon">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Results</h3>
              <p className="text-gray-600">Get your estimate in seconds</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4" role="img" aria-label="Shield icon">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Forever</h3>
              <p className="text-gray-600">No hidden fees or subscriptions</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}