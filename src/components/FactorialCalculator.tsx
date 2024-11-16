import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

export default function FactorialCalculator() {
  const [number, setNumber] = useState<number>(5);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    if (number < 0) {
      setError('Please enter a non-negative number');
      setResult(null);
      return;
    }
    if (number > 170) {
      setError('Number too large! Maximum supported value is 170');
      setResult(null);
      return;
    }
    setError('');
    setResult(factorial(number));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Calculate Factorial</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
            Enter a number (0-170)
          </label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value, 10))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            min="0"
            max="170"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate
        </button>

        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {result !== null && (
          <div className="p-4 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-600 mb-1">Result:</p>
            <p className="text-lg font-semibold text-gray-900">
              {number}! = {result.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}