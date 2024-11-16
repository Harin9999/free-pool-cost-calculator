import React from 'react';
import { Droplets, Sparkles, Shield } from 'lucide-react';

interface PoolFormProps {
  onCalculate: (data: {
    poolType: string;
    dimensions: {
      length: number;
      width: number;
      depth: number;
    };
    features: string[];
    equipment: string[];
    safetyFeatures: string[];
  }) => void;
  formData: {
    poolType: string;
    dimensions: {
      length: number;
      width: number;
      depth: number;
    };
    features: string[];
    equipment: string[];
    safetyFeatures: string[];
  };
}

const POOL_TYPES = [
  { id: 'concrete', label: 'Concrete Pool' },
  { id: 'fiberglass', label: 'Fiberglass Pool' },
  { id: 'vinyl', label: 'Vinyl Pool' },
];

const POOL_FEATURES = [
  { id: 'heater', label: 'Pool Heater', icon: '🌡️' },
  { id: 'lighting', label: 'LED Lighting', icon: '💡' },
  { id: 'cover', label: 'Automatic Cover', icon: '🎯' },
  { id: 'saltwater', label: 'Saltwater System', icon: '🧂' },
];

const EQUIPMENT_OPTIONS = [
  { id: 'pump', label: 'Pool Pump', repair: true },
  { id: 'filter', label: 'Filter System', repair: true },
  { id: 'heater', label: 'Pool Heater', repair: true },
  { id: 'chlorinator', label: 'Salt Chlorinator', repair: true },
];

const SAFETY_FEATURES = [
  { id: 'fence', label: 'Safety Fence' },
  { id: 'cover', label: 'Safety Cover' },
  { id: 'alarm', label: 'Pool Alarm' },
  { id: 'lighting', label: 'Safety Lighting' },
];

export default function PoolForm({ onCalculate, formData }: PoolFormProps) {
  const handleDimensionChange = (field: string, value: string) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    onCalculate({
      ...formData,
      dimensions: {
        ...formData.dimensions,
        [field]: numValue
      }
    });
  };

  const toggleFeature = (type: 'features' | 'equipment' | 'safetyFeatures', id: string) => {
    const currentFeatures = formData[type];
    const updatedFeatures = currentFeatures.includes(id)
      ? currentFeatures.filter(f => f !== id)
      : [...currentFeatures, id];
    
    onCalculate({
      ...formData,
      [type]: updatedFeatures
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Pool Type</label>
        <div className="grid grid-cols-3 gap-3">
          {POOL_TYPES.map(type => (
            <button
              key={type.id}
              type="button"
              onClick={() => onCalculate({ ...formData, poolType: type.id })}
              className={`feature-button ${
                formData.poolType === type.id
                  ? 'feature-button-active'
                  : 'feature-button-inactive'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { id: 'length', label: 'Length', min: 10, max: 100 },
          { id: 'width', label: 'Width', min: 5, max: 50 },
          { id: 'depth', label: 'Depth', min: 3, max: 12 }
        ].map(({ id, label, min, max }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {label} (ft)
            </label>
            <input
              type="number"
              id={id}
              value={formData.dimensions[id as keyof typeof formData.dimensions] || ''}
              onChange={(e) => handleDimensionChange(id, e.target.value)}
              className="input-field"
              min={min}
              max={max}
              step="0.5"
              placeholder="Enter value"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Additional Features</span>
          </div>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {POOL_FEATURES.map(feature => (
            <button
              key={feature.id}
              type="button"
              onClick={() => toggleFeature('features', feature.id)}
              className={`feature-button ${
                formData.features.includes(feature.id)
                  ? 'feature-button-active'
                  : 'feature-button-inactive'
              }`}
            >
              <span>{feature.icon}</span>
              <span>{feature.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4" />
            <span>Equipment & Repairs</span>
          </div>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {EQUIPMENT_OPTIONS.map(equipment => (
            <button
              key={equipment.id}
              type="button"
              onClick={() => toggleFeature('equipment', equipment.id)}
              className={`feature-button ${
                formData.equipment.includes(equipment.id)
                  ? 'feature-button-active'
                  : 'feature-button-inactive'
              }`}
            >
              {equipment.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Safety Features</span>
          </div>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {SAFETY_FEATURES.map(feature => (
            <button
              key={feature.id}
              type="button"
              onClick={() => toggleFeature('safetyFeatures', feature.id)}
              className={`feature-button ${
                formData.safetyFeatures.includes(feature.id)
                  ? 'feature-button-active'
                  : 'feature-button-inactive'
              }`}
            >
              {feature.label}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        onClick={() => onCalculate(formData)}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
      >
        Calculate Total Cost
      </button>
    </form>
  );
}