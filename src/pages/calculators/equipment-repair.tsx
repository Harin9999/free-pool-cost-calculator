import React, { useState } from 'react';
import { Wrench } from 'lucide-react';
import SEO from '../../components/SEO';

const EQUIPMENT_TYPES = [
  { id: 'pump', label: 'Pool Pump', basePrice: 150 },
  { id: 'filter', label: 'Filter System', basePrice: 200 },
  { id: 'heater', label: 'Pool Heater', basePrice: 300 },
  { id: 'chlorinator', label: 'Salt Chlorinator', basePrice: 250 },
];

const REPAIR_LEVELS = [
  { id: 'minor', label: 'Minor Repair', multiplier: 1 },
  { id: 'moderate', label: 'Moderate Repair', multiplier: 1.5 },
  { id: 'major', label: 'Major Repair', multiplier: 2 },
  { id: 'replacement', label: 'Full Replacement', multiplier: 3 },
];

export default function EquipmentRepair() {
  const [equipment, setEquipment] = useState('');
  const [repairLevel, setRepairLevel] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateRepairCost = () => {
    const selectedEquipment = EQUIPMENT_TYPES.find(e => e.id === equipment);
    const selectedRepair = REPAIR_LEVELS.find(r => r.id === repairLevel);

    if (selectedEquipment && selectedRepair) {
      const cost = selectedEquipment.basePrice * selectedRepair.multiplier;
      setEstimate(Math.round(cost));
    }
  };

  return (
    <>
      <SEO 
        title="Pool Equipment Repair Cost Calculator"
        description="Calculate the cost of pool equipment repairs and replacements. Get instant estimates for pump, filter, heater, and chlorinator repairs."
        canonical="/calculators/equipment-repair"
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Wrench className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Equipment Repair Calculator</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Select Equipment</h2>
                <div className="grid grid-cols-2 gap-3">
                  {EQUIPMENT_TYPES.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setEquipment(type.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        equipment === type.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="font-medium text-gray-800">{type.label}</div>
                      <div className="text-sm text-gray-500">From ${type.basePrice}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Repair Level</h2>
                <div className="grid grid-cols-2 gap-3">
                  {REPAIR_LEVELS.map(level => (
                    <button
                      key={level.id}
                      onClick={() => setRepairLevel(level.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        repairLevel === level.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="font-medium text-gray-800">{level.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculateRepairCost}
                disabled={!equipment || !repairLevel}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300"
              >
                Calculate Repair Cost
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {estimate !== null && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Estimated Cost</h2>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-blue-600 font-medium mb-1">Repair Estimate</div>
                  <div className="text-3xl font-bold text-gray-900">${estimate}</div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>This estimate includes:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Parts and materials</li>
                    <li>Labor costs</li>
                    <li>Standard warranty</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Maintenance Tips</h2>
              <div className="space-y-3 text-gray-600">
                <p>Regular maintenance can help prevent costly repairs:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Check equipment weekly for unusual sounds or behavior</li>
                  <li>Clean filters and baskets regularly</li>
                  <li>Monitor pressure gauges and water flow</li>
                  <li>Schedule professional inspections annually</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}