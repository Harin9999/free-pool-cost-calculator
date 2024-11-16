import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { locations } from '../utils/locations';

interface LocationSelectorProps {
  onLocationChange: (state: string, city: string) => void;
}

const stateData = {
  CA: {
    name: 'California',
    capital: 'Sacramento',
    admitted: 'September 9, 1850',
    population: 39538223,
    flag: 'https://images.unsplash.com/photo-1550850839-8dc894ed385a?w=320'
  }
};

export default function LocationSelector({ onLocationChange }: LocationSelectorProps) {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity('');
    setIsDetailsVisible(!!state);
    if (!state) {
      onLocationChange('', '');
    }
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    onLocationChange(selectedState, city);
  };

  const selectedStateInfo = selectedState ? stateData[selectedState as keyof typeof stateData] : null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">Find Local Services</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <select
            id="state"
            value={selectedState}
            onChange={(e) => handleStateChange(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select a state</option>
            {Object.entries(stateData).map(([abbr, state]) => (
              <option key={abbr} value={abbr}>
                {state.name} ({abbr})
              </option>
            ))}
          </select>
        </div>

        {selectedState && (
          <div className="animate-fade-in">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a city</option>
              {locations.states[selectedState].cities.map((city) => (
                <option key={city} value={city}>
                  {city.replace('_', ' ')}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedStateInfo && isDetailsVisible && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg animate-slide-up">
            <div className="flex items-start gap-4">
              <img
                src={selectedStateInfo.flag}
                alt={`${selectedStateInfo.name} flag`}
                className="w-20 h-12 object-cover rounded shadow-sm"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-2">{selectedStateInfo.name}</h4>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <dt className="text-gray-500">Capital:</dt>
                  <dd className="text-gray-900">{selectedStateInfo.capital}</dd>
                  <dt className="text-gray-500">Admitted:</dt>
                  <dd className="text-gray-900">{selectedStateInfo.admitted}</dd>
                  <dt className="text-gray-500">Population:</dt>
                  <dd className="text-gray-900">{selectedStateInfo.population.toLocaleString()}</dd>
                </dl>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}