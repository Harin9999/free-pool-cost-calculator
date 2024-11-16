import React from 'react';
import { DollarSign, Info, Hammer, FileText, Sparkles, Droplets, Calendar } from './icons';

interface ResultsProps {
  cost: {
    totalCost: number;
    breakdown: {
      baseCost: number;
      featuresCost: number;
      laborCost: number;
      permitsCost: number;
      yearlyMaintenance: number;
    };
  } | null;
}

export default function Results({ cost }: ResultsProps) {
  if (!cost || !cost.breakdown) {
    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Cost Estimate</h2>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <Info className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <p className="text-lg">Enter pool specifications to see the estimated cost</p>
          </div>
        </div>
      </div>
    );
  }

  const costBreakdown = [
    {
      icon: <Droplets className="w-5 h-5" />,
      label: 'Base Construction',
      amount: cost.breakdown.baseCost,
      description: 'Materials and basic installation',
    },
    {
      icon: <Hammer className="w-5 h-5" />,
      label: 'Labor',
      amount: cost.breakdown.laborCost,
      description: 'Professional installation services',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: 'Permits & Fees',
      amount: cost.breakdown.permitsCost,
      description: 'Required documentation and permits',
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      label: 'Additional Features',
      amount: cost.breakdown.featuresCost,
      description: 'Selected pool features and upgrades',
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Yearly Maintenance',
      amount: cost.breakdown.yearlyMaintenance,
      description: 'Estimated annual maintenance cost',
      isYearly: true,
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Cost Estimate</h2>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg mb-6">
        <div className="text-center">
          <p className="text-sm text-blue-600 font-medium mb-2">Estimated Total Cost</p>
          <p className="text-4xl font-bold text-gray-900">
            ${cost.totalCost.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Cost Breakdown</h3>
        {costBreakdown.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">{item.icon}</span>
                <span className="font-medium text-gray-800">{item.label}</span>
              </div>
              <div className="text-right">
                <span className="font-semibold text-gray-900">
                  ${item.amount.toLocaleString()}
                </span>
                {item.isYearly && (
                  <span className="text-sm text-gray-500 ml-1">/year</span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
        <p className="text-sm text-yellow-700">
          Note: This is an estimate based on average costs in your area. Final prices may vary depending
          on specific requirements, site conditions, and contractor selection.
        </p>
      </div>
    </div>
  );
}