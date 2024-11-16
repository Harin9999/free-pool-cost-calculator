import React, { useState } from 'react';
import { Droplets } from 'lucide-react';
import SEO from '../../components/SEO';

const POOL_SIZES = [
  { id: 'small', label: '12ft Round', price: 1500 },
  { id: 'medium', label: '15ft Round', price: 2000 },
  { id: 'large', label: '18ft Round', price: 2500 },
  { id: 'oval', label: '12x24ft Oval', price: 3000 },
];

const ADDITIONAL_FEATURES = [
  { id: 'deck', label: 'Pool Deck', price: 2000 },
  { id: 'ladder', label: 'Safety Ladder', price: 300 },
  { id: 'cover', label: 'Winter Cover', price: 200 },
  { id: 'pump', label: 'Filter Pump', price: 400 },
];

export default function AboveGroundPool() {
  const [selectedSize, setSelectedSize] = useState(POOL_SIZES[0].id);
  const [features, setFeatures] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const calculateCost = () => {
    const basePrice = POOL_SIZES.find(size => size.id === selectedSize)?.price || 0;
    const featuresPrice = features.reduce((total, feature) => {
      const featurePrice = ADDITIONAL_FEATURES.find(f => f.id === feature)?.price || 0;
      return total + featurePrice;
    }, 0);
    
    setTotalCost(basePrice + featuresPrice);
  };

  return (
    <>
      <SEO 
        title="Free Above Ground Pool Cost Calculator"
        description="Calculate the cost of your above ground pool for free. Get instant estimates based on pool size and additional features like decks, ladders, and covers."
        canonical="/calculators/above-ground"
      />

      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center gap-3 mb-8">
          <Droplets className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Free Above Ground Pool Calculator</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-3">Choose Pool Size</h2>
              <div className="grid grid-cols-2 gap-3">
                {POOL_SIZES.map(size => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedSize === size.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="font-medium text-gray-800">{size.label}</div>
                    <div className="text-sm text-gray-500">${size.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-3">Additional Features</h2>
              <div className="grid grid-cols-2 gap-3">
                {ADDITIONAL_FEATURES.map(feature => (
                  <button
                    key={feature.id}
                    onClick={() => setFeatures(prev =>
                      prev.includes(feature.id)
                        ? prev.filter(f => f !== feature.id)
                        : [...prev, feature.id]
                    )}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      features.includes(feature.id)
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="font-medium text-gray-800">{feature.label}</div>
                    <div className="text-sm text-gray-500">+${feature.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calculateCost}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Calculate Total Cost
            </button>

            {totalCost !== null && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm text-blue-600 font-medium">Estimated Total Cost</div>
                  <div className="text-3xl font-bold text-gray-900">${totalCost}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}