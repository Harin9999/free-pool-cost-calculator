import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import SEO from '../../components/SEO';

const SAFETY_FEATURES = [
  {
    id: 'fence',
    label: 'Pool Fence',
    basePrice: 1500,
    description: 'ASTM certified safety fence with self-closing gate',
    options: [
      { id: 'basic', label: 'Basic Mesh', multiplier: 1 },
      { id: 'premium', label: 'Premium Glass', multiplier: 2.5 },
    ],
  },
  {
    id: 'cover',
    label: 'Safety Cover',
    basePrice: 800,
    description: 'Heavy-duty mesh cover with secure anchoring system',
    options: [
      { id: 'mesh', label: 'Mesh Cover', multiplier: 1 },
      { id: 'solid', label: 'Solid Cover', multiplier: 1.5 },
    ],
  },
  {
    id: 'alarm',
    label: 'Pool Alarm',
    basePrice: 300,
    description: 'Advanced detection system for unauthorized pool access',
    options: [
      { id: 'surface', label: 'Surface Mount', multiplier: 1 },
      { id: 'subsurface', label: 'Subsurface', multiplier: 1.8 },
    ],
  },
  {
    id: 'lighting',
    label: 'Safety Lighting',
    basePrice: 600,
    description: 'LED lighting system for enhanced visibility',
    options: [
      { id: 'standard', label: 'Standard LED', multiplier: 1 },
      { id: 'smart', label: 'Smart Control', multiplier: 1.6 },
    ],
  },
];

interface SelectedFeature {
  id: string;
  optionId: string;
}

export default function SafetyFeatures() {
  const [selectedFeatures, setSelectedFeatures] = useState<SelectedFeature[]>([]);
  const [estimate, setEstimate] = useState<number | null>(null);

  const handleFeatureSelect = (featureId: string, optionId: string) => {
    setSelectedFeatures(prev => {
      const existing = prev.find(f => f.id === featureId);
      if (existing) {
        return prev.map(f => 
          f.id === featureId ? { ...f, optionId } : f
        );
      }
      return [...prev, { id: featureId, optionId }];
    });
  };

  const removeFeature = (featureId: string) => {
    setSelectedFeatures(prev => prev.filter(f => f.id !== featureId));
  };

  const calculateTotal = () => {
    const total = selectedFeatures.reduce((sum, selected) => {
      const feature = SAFETY_FEATURES.find(f => f.id === selected.id);
      const option = feature?.options.find(o => o.id === selected.optionId);
      if (feature && option) {
        return sum + (feature.basePrice * option.multiplier);
      }
      return sum;
    }, 0);
    setEstimate(Math.round(total));
  };

  return (
    <>
      <SEO 
        title="Pool Safety Features Calculator"
        description="Calculate the cost of essential pool safety features. Get instant estimates for fences, covers, alarms, and lighting systems."
        canonical="/calculators/safety-features"
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Safety Features Calculator</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Select Safety Features</h2>
              <div className="space-y-4">
                {SAFETY_FEATURES.map(feature => (
                  <div key={feature.id} className="p-4 border rounded-lg hover:border-blue-200 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-gray-800">{feature.label}</h3>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                      <button
                        onClick={() => removeFeature(feature.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {feature.options.map(option => (
                        <button
                          key={option.id}
                          onClick={() => handleFeatureSelect(feature.id, option.id)}
                          className={`p-2 rounded border text-sm transition-all ${
                            selectedFeatures.some(f => f.id === feature.id && f.optionId === option.id)
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-blue-300 text-gray-600'
                          }`}
                        >
                          {option.label}
                          <div className="text-xs text-gray-500">
                            ${feature.basePrice * option.multiplier}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={calculateTotal}
                disabled={selectedFeatures.length === 0}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300"
              >
                Calculate Total Cost
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {estimate !== null && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Cost Estimate</h2>
                <div className="bg-blue-50 rounded-lg p-4 text-center mb-4">
                  <div className="text-sm text-blue-600 font-medium mb-1">Total Estimate</div>
                  <div className="text-3xl font-bold text-gray-900">${estimate}</div>
                </div>
                <div className="space-y-3">
                  {selectedFeatures.map(selected => {
                    const feature = SAFETY_FEATURES.find(f => f.id === selected.id);
                    const option = feature?.options.find(o => o.id === selected.optionId);
                    if (feature && option) {
                      return (
                        <div key={selected.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            {feature.label} ({option.label})
                          </span>
                          <span className="font-medium text-gray-800">
                            ${feature.basePrice * option.multiplier}
                          </span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Safety Requirements</h2>
              <div className="space-y-3 text-gray-600">
                <p>Common pool safety requirements include:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Barrier at least 4 feet high</li>
                  <li>Self-closing and self-latching gates</li>
                  <li>Pool covers that meet ASTM standards</li>
                  <li>Proper lighting around pool area</li>
                  <li>Pool alarms for unauthorized access</li>
                </ul>
                <p className="text-sm text-yellow-600 mt-4">
                  Note: Check your local regulations for specific safety requirements in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}